var side = 10;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var vayreniArr = [];
var qarArr = [];
var dierArr=[];


function RadInt(min, max) {
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return z;
}
var matrix = [];
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



function setup() {
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

    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("white");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            else if (matrix[y][x] == 6) {
                fill("#EE33FF");
            }

            rect(x * side, y * side, side, side)

            /*fill("blue")
                text(x + " " + y, x * side + side / 2, y * side + side / 2)
            */
        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
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
        gishatichArr[i].move1()
        gishatichArr[i].eat()
        gishatichArr[i].die()
    }
    for (var i in vayreniArr) {
        vayreniArr[i].move()
        vayreniArr[i].eat()
        vayreniArr[i].eat1()
        vayreniArr[i].eat2()
        vayreniArr[i].eatDier()
    }
    for (var i in dierArr) {
        dierArr[i].eat()
        dierArr[i].die()
    }
}