const mongoose = require("mongoose");

require("dotenv").config();

const DBconnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("DB Connected successfully "))
    .catch((error) => {
      console.log("DB connect error");
      console.error(error);
      process.exit(1);
    });
};

module.exports = DBconnect;