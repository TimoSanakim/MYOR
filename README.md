# MYOR

Make Your Own Room group project for FHICT.

PWA based on HTML / CSS / JS.

Data handling with Node.js / MongoDB / Express

FHICT Groep 2 - Luc Swinkels, Timo Sanakim, Rafaël van der Heijden, Giovanni Smaal, Dimitri van Iersel.

## Installation

Use package manager [NPM](https://www.npmjs.com/) to install dependencies

```
npm install
```

Currently, MYOR is only available locally. Run it with Node.js on port 1234:

```
node index.js
```

Or use nodemon instead:

```
nodemon index.js
```

## Usage

A MongoDB cluster is required for this project.

For MongoDB installation please refer to the official [MongoDB Documentation](https://docs.mongodb.com/manual/installation/).

This project uses Mongoose to handle MongoDB data. Follow the official [Mongoose Documentation](https://mongoosejs.com/docs/guide.html) for help if needed.

To connect to the database, place your connection string in the following file:

/routes/database.js

```javascript
mongoose.connect("your connection string", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

This project uses a collection called "kamers". In order to change this collection name to your desired collection, change the collection in the following file:

/routes/models/kamerModel.js

```javascript
const kamer = new Schema(
  {
    // Schema details
  },
  // Collection details
  {
    collection: "kamers", // Specify collection
  }
);
```

The root directory of this project uses the MYOR - Home version. For the battle variant, please use the /battle/ URL.

## License

[MIT](https://choosealicense.com/licenses/mit/)
