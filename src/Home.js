import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import GrainTwoToneIcon from "@material-ui/icons/GrainTwoTone";

function Home() {
  return (
    <div className="home">
      <section className="home-infos">
        <h1>Don't be an airhead</h1>
        <p>
          We know how difficult it can be to organize oneself, especially during
          the pandemic. Here you can find your perfect school under 3 cliks
          guaranteed!
        </p>
        <ul className="home-list">
          <GrainTwoToneIcon className="home-list-icon" />
          <li>Search by State</li>
          <GrainTwoToneIcon className="home-list-icon" />
          <li>Search by School name</li>
          <GrainTwoToneIcon className="home-list-icon" />
          <li>Preview on the map</li>
        </ul>
        <Link to="/schools">
          <button>Give it a try</button>
        </Link>
      </section>
      <img
        className="home-bg"
        src="https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1653&q=80"
        alt="home page backgound"
      />
    </div>
  );
}

export default Home;
