[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# SVG-Logo-Generator

## [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Sources](#sources)
  - [GitHub](#github)
  - [Development](#development)

## Description

This is a webstore project for musical artist henrythedrip. This pseudo-webstore was developed as coursework for The University of Utah Coding Bootcamp. Users are able to create an account with a secure password, view a list of items for sale and buy those items now. Once purchased, previous purchases are able to be viewed on the account page.

## Installation

<!-- Thanks to NPM, installation is pretty simple. Simply clone the repository and then run `npm i` without any arguments, and that will install everything in our dependencies. This will automatically create the node modules. This will use version pinning to make sure whoever uses the code gets the same versions of our libraries that we are using. 

Please change the .env file to contain your credentials for the database, and rename the file to `.env` -->

First, clone the repository

`$ git clone <repo-link>`

Enter the repository through your command line

`$ cd <repo-name>`

Rename the example .env file

`<repo-name>$ mv .env.EXAMPLE .env`

Then insert your DB credentials into your .env file

Finally, install the dependencies

`<repo-name>$ npm i`

## Usage

There is a development script and a production script. Development uses nodemon to watch for changes and automatically restart the script upon noticing changes. For production simply use node.

### Development

`<repo-name>$ npm run dev`

### Production

`<repo-name>$ npm start`

## License

This project is licensed under the MIT license.
Please refer to the license badge at the top of this document.

## Sources

## GitHub

## Development

### Rough List

This is a rough list of things that need to be implemented in order for this project to function:

- [x] host a web server with express
- [ ] talk to the database
- [ ] create an account and have the info populate into the database
- [ ] log in (create cookie) & log out (destroy cookie)
- [ ] conditionally show content if user is logged in (check cookies)
- [ ] check account page for account information
- [ ] hit buy now and add information to the database
- [ ] show previous purchases on account page

### TODOs

Things that need to be done with the existing codebase. These things can be figured out by closely inspecting how the example project "14-MVC/01-Activities/22-Stu_MVC-Review".

- [ ] translate index.html to handlebars templates
- [ ] figure out a way to populate database with userData.json