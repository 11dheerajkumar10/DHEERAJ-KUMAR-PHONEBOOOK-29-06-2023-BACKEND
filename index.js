const express = require("express");
const cors = require("cors");
const app = express();
const { ContactRoutes } = require("./route/ContactRoutes");

app.use(express.json());
app.use(cors());

app.use("/", ContactRoutes);

app.listen("8888", () => {
  console.log("SERVER IS RUNNING");
});
