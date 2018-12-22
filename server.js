grassArr = [];
xotakerArr = [];
gishatichArr = [];
vayreniArr = [];
qarArr = [];
dierArr = [];
matrix = [];
weather = "garun";

var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var fs = require('fs');


app.use(express.static("."));
app.get("/", function (req, res) {
    res.redirect("index.html");
});
server.listen(3000);

io.on("connection", function (socket) { });

var Grass = require("./Grass.js");
var Xotaker = require("./xotaker.js");
var Gishatich = require("./gishatich.js");
var Qar = require("./qar.js");
var Vayreni = require("./vayreni.js");
var Dier = require("./dier.js");




function RadInt(min, max) {
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return z;
}

var n = 35
var m = 35
for (var i = 0; i <= n; ++i) {
    matrix[i] = [];
}
for (var y = 0; y <= n; y++) {
    for (var x = 0; x <= m; x++) {
        matrix[y][x] = Math.round(Math.random());
    }
}
var tokos1 = 0.3;
var tokos2 = 0.6;
var tokos3 = 0.9;
var tokos4 = 0.9;
var tokos5 = 0.9;

var tiv1 = n * m * tokos1 / 100;
var tiv2 = n * m * tokos2 / 100;
var tiv3 = n * m * tokos3 / 100;
var tiv4 = n * m * tokos4 / 100;
var tiv5 = n * m * tokos5 / 100;


for (var z = 0; z < tiv1; ++z) {
    var xx = RadInt(0, m);
    var yy = RadInt(0, n);
    matrix[xx][yy] = 2;
}

for (var z = 0; z < tiv2; ++z) {
    var xx = RadInt(0, m);
    var yy = RadInt(0, n);
    matrix[xx][yy] = 3;
}

for (var z = 0; z < tiv3; ++z) {
    var xx = RadInt(0, m);
    var yy = RadInt(0, n);
    matrix[xx][yy] = 4;
}
for (var z = 0; z < tiv4; ++z) {
    var xx = RadInt(0, m);
    var yy = RadInt(0, n);
    matrix[xx][yy] = 5;
}
for (var z = 0; z < tiv5; ++z) {
    var xx = RadInt(0, m);
    var yy = RadInt(0, n);
    matrix[xx][yy] = 6;
}




for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y)
            grassArr.push(gr)
        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y)
            xotakerArr.push(xt)
        }
        else if (matrix[y][x] == 3) {
            var gi = new Gishatich(x, y)
            gishatichArr.push(gi)
        }
        else if (matrix[y][x] == 4) {
            var va = new Vayreni(x, y)
            vayreniArr.push(va)
        }
        else if (matrix[y][x] == 5) {
            var qa = new Qar(x, y)
            qarArr.push(qa)
        }
        else if (matrix[y][x] == 6) {
            var di = new Dier(x, y)
            dierArr.push(di)
        }
    }
}


function drawServerayin() {
    for (var i in grassArr) {
        grassArr[i].mul()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].mult()
        gishatichArr[i].move()
        gishatichArr[i].eat()
        gishatichArr[i].die()
    }
    for (var i in vayreniArr) {
        vayreniArr[i].move()
        vayreniArr[i].eat()
        vayreniArr[i].eat1()
        vayreniArr[i].eat2()
        vayreniArr[i].eatDier()
        vayreniArr[i].die()
    }
    for (var i in dierArr) {
        dierArr[i].eat()
        dierArr[i].die()
    }
    io.sockets.emit("matrix", matrix)
}
function changeWeather() {
    if (weather == "garun") {
        weather = "amar"
    }
    else if (weather == "amar") {
        weather = "ashun"
    }
    else if (weather == "ashun") {
        weather = "dzmer"
    }
    else if (weather == "dzmer") {
        weather = "garun"
    }
    io.sockets.emit("exanak", weather);
}

setInterval(changeWeather, 3000);
setInterval(drawServerayin, 200);
setInterval(printStat, 5000);

xotQanakStat = 0;
xotakerQanakStat = 0;
gishatichQanakStat=0;


var jsonObj = { "info": [] };
function printStat() {
    var file = "stat.json";
    jsonObj.info.push({ "xot qanak": xotQanakStat, "xotaker qanak": xotakerQanakStat});
    fs.writeFileSync(file, JSON.stringify(jsonObj));
}