# One MEAN (Mongo, Express, Angular, Node.js) CRUD on Docker Demo App
The project contained in this repository provides a basic working CRUD application built on Docker to get you up and coding on a MEAN stack in Docker, sooner.

In order to share a baseline understanding of containerization technologies built on Docker along with the practical knowledge necessary to begin building, shipping and deploying MEAN (Mongo / Express / Angular / Node.js) applications in containers, this project has been developed and made available through our public repo.

### Prerequisites
- Internet Connection
- Running Docker Engine

### To run this project
* 1 - Download the repo (on Linux, be certain to also install docker-compose)
* 2 - From the project directory, "docker-compose up"

### Docker Hub JHUOPENSOURCE repo pull commands for project images
Pulling from the Hub is optional for those who just want to run (this meets the "SHIP" requirement)
* docker push jhuopensource/meandemo:nginx_angular_node
* docker push jhuopensource/meandemo:express_node
* docker push jhuopensource/meandemo:mongo

### Travis Image Status
<a href="https://travis-ci.com/jhuopensource/meandemo"><img src="https://api.travis-ci.com/jhuopensource/meandemo.svg?branch=master"></a>

## Authors
* **Mike Sellers - JHU - Container Zealot and Senior Software Engineer**
* **Ali Soylu - JHU - Developer and IT Architect**

## Acknowledgments
* This project was inspired by the Johns Hopkins University (JHU ACM) Association for Computing Machinery https://johnshopkins.campuslabs.com/engage/organization/associationforcomputingmachineryjhu and their passion for computing as well as their desire to collaborate.
* This application was adapted and enhaced from the "MEAN Stack Angular 6 CRUD Web Application" by Didin, J. https://www.djamware.com/post/5b00bb9180aca726dee1fd6d/mean-stack-angular-6-crud-web-application.
