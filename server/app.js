const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
dotenv.config();

const PORT = process.env.API_PORT || 4040; // we use || to provide a default value
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};
app.use(cors);

app.use(express.json());
app.use(logging);

app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service Healthy" }));
});
app.get("/echo:content", (request, response) => {
  const content = request.params.content;
  response.send(JSON.stringify({ echoed: content }));
});

/*
  express supports chaining `use()` statements,
  so the above 2 statements could look like this as well
  app.use(express.json()).use(logging)
*/

// Request handlers go here
// app.get("/status", (request, response) => {
//   response.send(JSON.stringify({ message: "Service healthy" }));
// });

app.listen(4040, () => console.log("Listening on port 4040"));
