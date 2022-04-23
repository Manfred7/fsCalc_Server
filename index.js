import express from "express";
import {db} from "./db.js";

const port = 8000;
const app = express();

app.get("/starCards", (req, res) => {
    res.status(200).send(db.starCards);
    console.log("отправили json")
})


app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost: ${port}`);
})
