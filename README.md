[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Merch, Media & Community of henrythedrip

## [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Sources](#sources)
  - [GitHub](#github)
  - [Development](#development)

## Description
This is a webstore project for musical artist henrythedrip. This pseudo-webstore was developed as coursework for The University of Utah Coding Bootcamp. Users are able to create an account with a secure password, view a list of items for sale and buy those items now. Once purchased, previous purchases are able to be viewed on the account page. henrythedrip music videos are also accessible through this website. 

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
Assistance received from exemplary individuals like Jaytee Padilla, Tom Gold, and Karina Guerrero
Express documentation
Handlebars Documentation
Student mini project examples
Urban dictionary for "drip" definition

## GitHub

## Development

### Rough List
This is a rough list of things that need to be implemented in order for this project to function:
- [x] host a web server with express
- [x] talk to the database
- [x] create an account and have the info populate into the database
- [x] log in (create cookie) & log out (destroy cookie)
- [x] conditionally show content if user is logged in (check cookies)
- [x] check account page for account information
- [x] hit buy now and add information to the database
- [x] show previous purchases on account page

### TODOs
Things that need to be done with the existing codebase.

- [ ] Expand on the e-commerce aspect of the website. 
- [ ]Allow for users to go through the full process of e-commerce, meaning the user can add items to the cart, add payment method and checkout completely.
- [ ] Expand on the product library, adding more merchandise, sizing, color options, etc.
- [ ] Add another tab that populates concert venues and schedule so users can see when he will be performing in their city
- [ ] Implement error handling for all routes/endpoints
- [ ] Create tests for each route/endpoint using supertest or jest
- [ ] Make sure there are no security vulnerabilities by running a security audit

