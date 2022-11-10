import express from "express";

const app = express();

app.get('/ads', ()=>{
  console.log('acessou Ads!')
});

app.listen(5000);