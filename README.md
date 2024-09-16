# Mini Message Board

Live 👉[preview](https://tortoiseshell-denim-lilac.glitch.me/) of the project, hosted by Glitch.

This project is part of [The Odin Project](https://www.theodinproject.com/lessons/nodejs-mini-message-board) curriculum.

Goal of this project is to create interactive web app using node and express.

## Technologies used

- Node.js
- Express
- EJS
- Tailwind

### Installing

1. Clone or fork this repo
2. cd into the mini-messages-board directory (where this README is located).
3. Run npm install

### Starting the server

Run npm start. The server will be found at [http://localhost:5000]

## Using the server

Server is hosting basic dynamic site.

## Screenshot

![Messages.](/public/screenshots/mini-screen-messages.png "This is a sample image.")

![Form.](/public/screenshots/mini-screen-form.png "This is a sample image.")

![Messages details.](/public/screenshots/mini-screen-message-details.png "This is a sample image.")

![Confirm box.](/public/screenshots/mini-screen-confirm.png "This is a sample image.")

### Server routes:

- /
- /messages
- /messages/:messageId
- /messages/new
- /messages/:messageId/delete
- /messages/:messageId/update
- /\* (\* means any other route, returning 404 page)
