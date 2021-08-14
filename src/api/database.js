const express = require("express");

const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  let url = `${process.env.SUPABASE_URL}/rest/v1/test`;
  axios
    .get(url, { headers: { apikey: process.env.SUPABASE_KEY } })
    .then((response) => {
      res.json(response.data);
    });
});

router.post("/", (req, res) => {
  // console.log(req.body);
  let url = `${process.env.SUPABASE_URL}/rest/v1/test`;
  let data = {
    data: req.body,
  };
  axios
    .post(url, data, { headers: { apikey: process.env.SUPABASE_KEY } })
    .then((response) => {
      res.json(response.data);
    });
});

module.exports = router;
