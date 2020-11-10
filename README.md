# Project Name

Homework 10 - Employee Summary

# Table of contents

- [Project Name](#project-name)
- [Table of contents](#table-of-contents)
- [General info](#general-info)
- [Screenshots](#screenshots)
- [Features](#features)
- [Installation](#installation)
- [User Guide](#user-guide)
- [Code Style](#code-style)
- [Technology](#technology)
- [Local File Description](#local-file-description)
- [Code Example](#code-example)
- [Test](#test)
- [Status](#status)
- [Future Plan](#future-plan)
- [Create By](#create-by)

# General info

This project is to bulid a application to generate the team infomation with the input from the user - The Manager.

For the feature of the site, please visit the [Features](#features) section for more details.

# Screenshots

![screenshot](https://github.com/rickyfuk/employeesummary/blob/master/assets/images/screenshot.PNG?raw=true)

# Features

In this project, the following features have apply to the site:

1. The user can add as many team members as needed
2. The application will display the input from node.js to html
3. All input contain validator in order to avold the user misinput the wrong infomation
4. Below is the input field for different job role:
   | job role | name | Staff ID | Email | Office Number | GitHub | School |
   | :-----------: | :----: | :----: | :----: | :----: | :----: | :----: |
   | Manager | &#10004; | &#10004; | &#10004; | &#10004; | | |
   | Engineer | &#10004; | &#10004; | &#10004; | | &#10004; | |
   | Intern | &#10004; | &#10004; | &#10004; | | | &#10004; |

# Installation

The user must install the npm package before they run the apps:

```sh
npm install
```

# User Guide

The user need to type the following code to start the application from Terminal:
(Please ensure the folder path is correct)

```sh
node app.js
```

# Code Style

Standard

# Technology

The following technology have been used for this project:

1. [HTML](https://whatwg.org/)
2. [CSS](https://www.w3.org/Style/CSS/)
3. [Bootstrap](https://getbootstrap.com/)
4. [Fontawesome](https://fontawesome.com/)
5. [JavaScript](https://www.javascript.com/)
6. [NodeJS](https://nodejs.org/en/)
7. [NPM](https://www.npmjs.com/)
   The following application from NPM have been used:
   1. Inquirer
   2. jest (for testing the JS)

# Local File Description

Below are the description for all local files:

1. HTML:
   1. team.html - The final output for the application - team member information
   2. main.html - The template for buliding the structure for team.html
   3. engineer.html - The template for building the engineer card
   4. intern.html - The template for building the intern card
   5. manager.html - The template for building the manager card
2. CSS:
   1. style.css - to add the local style to this application
3. Javascript
   1. app.js - the main javascript file to keep the script for getting the information from the user and relay it back to html
   2. prompt.js - the javascript file to keep all the question for the user and render it in due course
   3. Employee.js - the constructor for the employee class
   4. Engineer.js - the constructor for the engineer class
   5. Intern.js - the constructor for the intern class
   6. Manager.js - the constructor for the manager class
   7. htmlRender.js - the script to return the information to html
4. JSON
   1. package.json - the main file for the description of the application and the dependencies

# Code Example

Below are some example for the code has been used and the corresponding outcome:

1. Use class with extend to build up the class

```Javascript
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}
```

# Test

1. The application have passed the following test:
   1. Employee.test.js
   2. Engineer.test.js
   3. Intern.test.js
   4. Manager.test.js
   - Please following the following code to perform the test if needed
     for instance - Employee.test.js
     ```sh
     npm test
     ```

# Status

Project status: finished

# Future Plan

Plan for the future development of this site:

1. Put it on a live server
2. Build a better front-end layout (i.e. Manager level / Engineer Level / Intern Level)
3. Build a Organization chart with the tree diagram.

# Create By

Created by Chung Hei Fuk
