const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const request = require('request')
const fs=require('fs')
require("dotenv").config();


//set up express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server is running on : ${PORT}`));

app.use("/users", require('./routes/userRouters'))

