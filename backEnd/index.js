var express = require("express"); //express library for api calls 
var app = express();
app.listen(9200);                  //listen for connections on port 9200 
app.get("/api/stock/csco", (req, res, next) => {       //get requests to the url
    res.header('Access-Control-Allow-Origin','*');     //added support for cors requests 
    res.json(                                          // /api/stock/csco gets a reponse of a 7 day close
        {
            labels: ['30-01-2020', '31-01-2020', '01-02-2020', '02-02-2020', '03-02-2020', '04-02-2020', '05-02-2020'],
            data: [47.24,45.97,46.53,47.62,48.45,48.69]
        }
    )
})