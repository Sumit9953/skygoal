const express = require('express')
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000

//Cookie-parser
const cookieParser = require("cookie-parser")
app.use(cookieParser());
app.use(express.json());

const user = require("./routes/user")

app.use("/api/v1" , user);

const database = require("./config/database")
database()

app.listen(PORT , (req,res) => {
    console.log(`Server started at port: ${PORT}`);
})