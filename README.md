
############################ FRANÇAIS ######


**QUOI //**

 - app qui utilise l'api : https://any-api.com/schooldigger_com/schooldigger_com/docs/API_Description
 
**PRESENTATION //**

- un composant HOME : introduit les fonctionnalités, contient :
  -> un background 
  -> un champs d'informations                                                                 
                                                                                              
- un composant SCHOOLS : là où tout se déroule, contient :                                    
  -> une entête qui comporte nos inputs                                                       
  -> une section qui regroupe le résultats de l'input                                         
  -> une section composée d'une carte mapbox                                                  
  -> un pied de page qui contient les abréviations des États-Unis d'Amérique                  

**FONCTIONNALITÉS //**
==> à la soumission du formulaire
  - recherche d'écoles par états
  - recherche par nom d'école
  - affichage des écoles sur la carte (adresses, nom, nombres d'étudiants)
  - au clique sur la carte, on retrouve les coordonnées géographiques des écoles ainsi que leur noms
 
**UTILISATION //**
  - l'app utilse ReactJS
  - installer les dépendances avec : npm install 
  - lancer l'app avec : npm start
  
**ATTENTION //**
  - l'app utilise des variables stockées dans un fichier qui n'est pas téléverser sur git
  - configurez une clé d'accès pour faire des requêtes à l'api 

############################ ENGLISH  ######


**WHAT //**

 - the app uses the api : https://any-api.com/schooldigger_com/schooldigger_com/docs/API_Description
 
**PRESENTATION //**

- HOME component : introduces the functionnalities, includes :
  -> a background 
  -> an information box
  
- SCHOOLS component : where everythinh takes place, includes :
  -> a header wrapping inputs
  -> a section dedicated to the input's result
  -> a mapbox section
  -> a footer displaying the states of the us abbreviations

**FONCTIONNALITIES //**
==> on submit
  - search school by state
  - search by school name
  - display results on the map (addresses, names, number of students)
  - on click, we cand find a school's name and address
 
**HOW TO USE//**
  - the app uses ReactJS
  - install dependancies : npm install 
  - launch app : npm start
  
**CAUTION //**
  - some variables used in the project come from a folder that is not pushed on git
  - to be able to make requests to the api you need to set up credentials 


################################################
#                    NOTE                      #
#  pour l'instant ces états font cracher l'app #
#         AL | CA | FL | GA | HI | ID          # 
#         NV | NJ | OK | RI | VT | VW          #
#                                              #
################################################

