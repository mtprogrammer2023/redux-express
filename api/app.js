const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api", async (req, res) => {
  try {
    const apiResponse = await fetch(
      "https://api.themoviedb.org/3/movie/popular/?api_key=b816fb35540afec9b0927fa7fe9d2aff"
    );
    const response = await apiResponse.json();
    console.log(response);
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.listen(9000);
