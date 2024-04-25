const express = require("express");
const app = express();
const port = 3000;

app.get("/movies", (req, res) => {
  res.send([
    {
      title: "Pulp Fiction",
    },
    {
      title: "Star Wars",
    },
    {
      title: "Cars",
    },
  ]);
});

app.listen(port, () => {
  console.log("example app listening at http://localhost:${port}");
});
