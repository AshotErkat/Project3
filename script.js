var side = 20;
var socket = io();
var weather = "garun";
function setup() {

    frameRate(3);
    createCanvas(500, 500);
    background('#acacac');
}

function drawMatrix(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
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
            else if (matrix[y][x] == 0) {
                if (weather == "amar") {
                    fill("pink");
                }
                else if (weather == "ashun") {
                    fill("lightyellow");

                }
                else if (weather == "dzmer") {
                    fill("lightblue")
                }
                else if (weather == "garun") {
                    fill("lightgreen")
                }
            } 
            rect(x * side, y * side, side, side)
        }
    }
}
socket.on("matrix", drawMatrix);
socket.on("exanak", function (w) {
    weather = w;
});