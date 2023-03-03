const express = require("express");
const app = express();
const methodOverride = require("method-override");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const Keeper = require("./mongo.js");
const cores = require("cors");
app.use(cores());
const path = require("path");
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.post("/insertData", (req, res) => {
  const data = JSON.parse(Object.keys(req.body)[0]);
  const { title, content } = data;
  console.log(title);
  console.log(data);
  Keeper.insertMany([data]);
});

app.delete("/data/:_id", async (req, res) => {
  const { _id } = req.params;
  await Keeper.findByIdAndDelete(_id);
  console.log(_id);
});

app.get("/data", async (req, res) => {
  Keeper.find({}).then((data) => {
    res.json(data);
  });
  // const notes = await Keeper.find({});
  // console.log(notes.data);
  // res.json(notes);
});

app.listen(3000, () => {
  console.log("APP is working fine!!!!!");
});
