let posX;
let xSpeed;

function setup(){
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 5;
    fill('limegreen');
}

function draw() {
    background(0);
    if(posX <= 25) {
        xSpeed = 5;
        console.log("e");
    }
    if(posX >= 575) {
        xSpeed = -5
        console.log("a");
    }
    posX = posX + xSpeed;
    circle(posX + xSpeed, 200, 50);
}