const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


app.use(express.static(__dirname + '/public'));

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

router.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.use('/', router);

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});