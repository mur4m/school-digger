import ReactMapGL, { Marker, Popup } from "react-map-gl";
import pin from "./data/pin-school.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./School.css";

const Schools = () => {
  //setting the map (where it centers, how wide and big)
  const [viewport, setViewport] = useState({
    latitude: 39.88611,
    longitude: -98.63553,
    width: "50vw",
    height: "50Vh",
    zoom: 3,
  });

  //STATES
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [schools, setSchools] = useState([]);
  const [usState, setUsState] = useState(null);
  const [resData, setResData] = useState(null);
  const [nameOfSchoolorCity, setNameOfSchoolorCity] = useState("");

  // SENSITIVE INFOS CONST
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_ID = process.env.REACT_APP_API_ID;

  useEffect(() => {
    fetchItems();
  }, [usState, nameOfSchoolorCity]);

  //ON SUBMIT
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);

    if (e.target[1].value != "") setNameOfSchoolorCity(e.target[1].value);
    else {
      setNameOfSchoolorCity("");
      setUsState(e.target[0].value);
    }
  };

  // CALL TO API
  const fetchItems = async () => {
    if (usState != null) {
      try {
        const result = await axios.get(
          `https://api.schooldigger.com/v1/schools?st=${usState}&q=${nameOfSchoolorCity}&appID=${API_ID}&appKey=${API_KEY}`
        );
        setSchools(result.data.schoolList);
        setResData(result.data.numberOfSchools);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="all-schools">
      <section className="schools-search">
        <form onSubmit={onSubmit}>
          <input name="usaState" type="text" placeholder="state (ex.. AZ)" />
          <input
            name="usaSchoolNameOrCity"
            type="text"
            placeholder="school name or city"
          />

          <input type="submit" className="submit-btn" />
        </form>
      </section>

      <section className="schools-list-container">
        {schools
          ? schools.map((school, key) => {
              return (
                <section key={school.schoolid} className="all-infos">
                  <h1>{school.schoolName}</h1>

                  {school.schoolYearlyDetails != null ? (
                    <span>
                      Students :{" "}
                      {school.schoolYearlyDetails[0].numberOfStudents}
                    </span>
                  ) : (
                    ""
                  )}

                  <ul>
                    <li>{school.address.street}</li>
                    <li>{school.address.city}</li>
                    <li>{school.address.state}</li>
                    <li>{school.address.stateFull}</li>
                  </ul>
                </section>
              );
            })
          : null}
      </section>

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/humblebee/ckib16ig30av91antalitarfn"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <p>{resData}</p>
        {schools.map((school, i) => (
          <div key={i}>
            {school.address.latLong.latitude &&
            school.address.latLong.longitude ? (
              <Marker
                key={school.schoolid}
                latitude={school?.address?.latLong?.latitude}
                longitude={school?.address?.latLong?.longitude}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedSchool(school);
                  }}
                >
                  <img className="schoolpins" src={pin} alt="school pin icon" />
                </button>
              </Marker>
            ) : (
              ""
            )}
          </div>
        ))}

        {selectedSchool ? (
          <Popup
            latitude={selectedSchool.address.latLong.latitude}
            longitude={selectedSchool.address.latLong.longitude}
            onClose={() => setSelectedSchool(null)}
          >
            <div className="popup-infos">
              <h2>{selectedSchool.schoolName}</h2>
              <span>
                {selectedSchool.schoolYearlyDetails[0].numberOfStudents}
              </span>
              <p>{selectedSchool.address.street}</p>
              <p>{selectedSchool.address.zip}</p>
              <p>{selectedSchool.address.city}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
      <section className="states-code-indicator">
        <table className="states-code-container">
          <thead>
            <tr>
              <th colSpan="5">US States Abbreviations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AL</td>
              <td>AK</td>
              <td>AZ</td>
              <td>AR</td>
              <td>CA</td>
              <td>CO</td>
              <td>CT</td>
              <td>DE</td>
              <td>DC</td>
              <td>FL</td>
              <td>GA</td>
            </tr>
            <tr>
              <td>HI</td>
              <td>ID</td>
              <td>IL</td>
              <td>IN</td>
              <td>IA</td>
              <td>KS</td>
              <td>KY</td>
              <td>LA</td>
              <td>ME</td>
              <td>MD</td>
            </tr>
            <tr>
              <td>MA</td>
              <td>MI</td>
              <td>MN</td>
              <td>MS</td>
              <td>MO</td>
              <td>MT</td>
              <td>NE</td>
              <td>NV</td>
              <td>NH</td>
              <td>NJ</td>
            </tr>
            <tr>
              <td>NM</td>
              <td>NY</td>
              <td>NC</td>
              <td>ND</td>
              <td>OH</td>
              <td>OK</td>
              <td>OR</td>
              <td>PA</td>
              <td>RI</td>
              <td>SC</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>TN</td>
              <td>TX</td>
              <td>UT</td>
              <td>VT</td>
              <td>VA</td>
              <td>WA</td>
              <td>WV</td>
              <td>WI</td>
              <td>WY</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Schools;
