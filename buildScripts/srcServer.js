const express = require('express');
const path = require('path');
const open = require('open');

const port = 3000;
const app = express();

app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname,'../src/index.html'));
});
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.listen(port, (err) => {
    if(err){
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});