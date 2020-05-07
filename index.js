 
    const https = require('https');
   const request = require("request");
   const url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3";

  
  request.get(url, (error, response, body) => {   //первый метод
    let json = JSON.parse(body);
    console.log(json);
  });



  https.get(url, (res) => {              // второй метод
    res.on('data', (url) => {
      let a=JSON.parse(url)
      console.log(a)
  });
  })