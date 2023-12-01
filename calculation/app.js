const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const numberToWords = require("number-to-words");
const { request } = require("http");
const PORT=process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");

//call initial page request
app.get("/", (req, res) => {
  res.render("index");
});
// serve form data page response
app.post("/", (req, res) => {
  const name = req.body.txtName;
  const unit = req.body.txtConsumption;
  const consumption = parseInt(req.body.txtConsumption);
  const subsidyForDomestic = parseInt(100);

  if (consumption >= 0 && consumption <= 500) {
    if (consumption >= 0 && consumption <= 100) {
      const result = "free";
      const words = "-----";
      res.render("index", { result, name, consumption, words });
    } else if (consumption >= 101 && consumption <= 200) {
      const reducedSubsidy = parseInt(consumption - subsidyForDomestic);
      let result1 = parseInt(reducedSubsidy) * 2.25;
      let result = Math.ceil(result1);
      const number = result;
      const words = numberToWords.toWords(number);
      res.render("index", { result, name, consumption, words });
    } else if (consumption >= 201 && consumption <= 400) {
      const reducedSubsidy = parseInt(consumption - subsidyForDomestic);
      let result1 = parseInt(reducedSubsidy);
      let result2 = parseInt(result1 - 100);
      let result3 = parseInt(result2) + 225;
      let result4 = parseInt(consumption - 200); //53
      let result5 = parseFloat(result4 * 4.5);
      let result6 = parseFloat(result5 + 225);
      let result = Math.ceil(result6);
      const number = result;
      const words = numberToWords.toWords(number);
      res.render("index", { result, name, consumption, words });
    } else if (consumption >= 401 && consumption <= 500) {
      const reducedSubsidy = parseInt(consumption - subsidyForDomestic);
      let result1 = parseInt(reducedSubsidy);
      let result2 = parseInt(225 + 450 + 450);
      let result3 = parseFloat(consumption) - 300;
      let result4 = result3 - subsidyForDomestic;
      //let result = parseFloat(result3 - result1);
      let result5 = parseFloat(result4 * 6);
      let result6 = parseFloat(result2 + result5);
      let result = Math.ceil(result6);
      const number = result;
      const words = numberToWords.toWords(number);
      res.render("index", { result, name, consumption, words });
    }
  } else if (consumption >= 501 && consumption <= 1000) {
    if (consumption >= 501 && consumption <= 600) {
      const reducedSubsidy = parseInt(consumption - subsidyForDomestic);
      const result1 = parseInt(reducedSubsidy);
      const result2 = parseInt(1800 + 600);
      const result3 = parseInt(result1) - 400;
      const result4 = parseInt(result3 * 8);
      const result5 = result2 + result4;
      let result = Math.ceil(result5);
      const number = result;
      const words = numberToWords.toWords(number);
      res.render("index", { result, name, consumption, words });
    } else if (consumption >= 601 && consumption <= 800) {
      const reducedSubsidy = parseInt(consumption - subsidyForDomestic);
      const result1 = parseInt(reducedSubsidy);
      const result2 = parseInt(1800 + 600 + 800);
      const result3 = parseInt(result1) - 500;
      const result4 = parseInt(result3 * 9);
      const result5 = result2 + result4;
      let result = Math.ceil(result5);
      const number = result;
      const words = numberToWords.toWords(number);
      res.render("index", { result, name, consumption, words });
    } else if (consumption >= 801 && consumption <= 1000) {
      const reducedSubsidy = parseInt(consumption - subsidyForDomestic);
      const result1 = parseInt(reducedSubsidy);
      const result2 = parseInt(1800 + 600 + 800 + 1800);
      const result3 = parseInt(result1) - 700;
      const result4 = parseInt(result3 * 10);
      const result5 = result2 + result4;
      let result = Math.ceil(result5);
      const number = result;
      const words = numberToWords.toWords(number);
      res.render("index", { result, name, consumption, words });
    } else if (consumption == 1000) {
      const result1 = parseInt(1800 + 600 + 800 + 1800 + 2000);
      let result = Math.ceil(result1);
      const number = result;
      const words = numberToWords.toWords(number);
      res.render("index", { result, name, consumption, words });
    }
  }
});

app.listen(PORT);
