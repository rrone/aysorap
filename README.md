# AYSO Regional Assessment Program - Prototype

RAP Form built with [Bootstrap 3][bootstrap] components in [React][react].

This is a single-page app that saves form data as it's typed to a MongoDB database.

## Docs

 - Docs would be nice

## Related modules

- [react-bootstrap][react-bootstrap] – Make Bootstrap 3 play nice with React

## Prerequisites
 - node.js >= 6.0 (with npm)
 - MongoDB >= 3.0


## Local setup

- Open a terminal (or however you do that kind of thing)
- Clone or download this repository
- `cd mdb` to change to the database client folder
- Install the dependencies with `npm install`
- Run the client with `node index.js`
- Open a new terminal to the aysorap folder
- `cd rap` to change to the front-end folder
- Install the dependencies with `npm install`
- When `npm run build` fails, start the front-end by running `npm start`
- This should open the front-end app in your browser

- The front-end will proxy requests to the db client API, eliminating CORS issues

## Contributions

Yes please! 
