const express = require("express");
const app = express();

var addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  const date = new Date();
  const newDate = addDays(date, 100);
  response.send(
    `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  );
});

module.exports = app;
