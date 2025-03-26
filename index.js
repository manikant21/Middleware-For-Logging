import express from "express";
import dotenv from "dotenv";
import {loggerMiddleware} from './middlewares/loggerMiddleware.js'

dotenv.config();
const app = express();



app.get("/products", loggerMiddleware, (req,res) => {
    res.send("Here is the list of all products.")
}) 

app.post("/products", loggerMiddleware, (req,res) => {
    res.send("A new product has been added.")
}) 

app.get("/categories", loggerMiddleware, (req,res) => {
    res.send("Here is the list of all categories.")
}) 

app.post("/categories", loggerMiddleware, (req,res) => {
    res.send("A new category has been created.")
}) 


app.listen(process.env.PORT, () => {
    console.log(`Server is up and running at ${process.env.PORT}`)
})