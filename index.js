const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

router.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.use('/', router);
app.listen(port);