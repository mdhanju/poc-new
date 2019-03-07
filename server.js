const express = require('express')
const app = express()
const port = 8000
var path    = require("path");
app.set('view engine', 'html');
app.use(express.static(__dirname + '/build'));
//app.use( express.static( __dirname + '/build' ));

app.get('/',function(req,res)   {
    //res.sendFile((path.join(__dirname + '/src/index.js')));
    res.render('index');
  });
app.get('/data',function(req,res)   {
    res.json({
        status: "OK"
    });
  });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
