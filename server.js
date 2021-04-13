import Clothes from "./dbClothes.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//app config
const app = express();
const port = process.env.PORT || 5001;
const connection_url =
  "mongodb+srv://admin:<PASSWORD>@cluster0.c8dgn.mongodb.net/enjdb?retryWrites=true&w=majority";

//middlewares
app.use(express.json());
app.use(cors());

//db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//api endpoints
app.get("/", (req, res) => {
  res.status(200).send("HELLO WORLD!!!");
});

//store data to database
app.post("/enj/clothes", (req, res) => {
  const dbClothes = req.body;

  Clothes.create(dbClothes, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
      console.log(data);
    }
  });
});

//load from database
app.get("/enj/clothes", (req, res) => {
  Clothes.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//delete data from database
app.delete("/enj/clothes", (req, res) => {
  Clothes.remove((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(202).send(data);
    }
  });
});

//listener
app.listen(port, () => console.log("listening on localhost", port));
