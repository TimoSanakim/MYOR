const http = require("http");
const {
    MongoClient
} = require("mongodb");
const database_string =
    "mongodb+srv://Myorman6487:HikWNhPxdVCSMMOI@myor.6scmy.mongodb.net/?retryWrites=true&w=majority";
const hostname = "localhost";
const port = 1234;


const database_client = new MongoClient(database_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
database_client.connect().then(() => {
    const myor_database = database_client.db("Myor");
    const kamers = myor_database.collection("kamers");
    console.log("test");
    kamers
        .find({}, {})
        .toArray()
        .then((inhoud_kamers) => {
            console.log(inhoud_kamers);
        });

    const server = http.createServer((verzoek, antwoord) => {
        antwoord.setHeader("Access-Control-Allow-Origin", "*");
        console.log(
            `${verzoek.method} Verzoek gedaan op server! -> ${verzoek.url}`
        );
        antwoord.statusCode = 200;
        antwoord.setHeader("Content-Type", "text/json");
        antwoord.end("Hallo wereld!");
    });
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});