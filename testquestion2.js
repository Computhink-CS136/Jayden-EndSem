let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    fill("pink");
    // Task: Align the text to the center using textAlign
    // Task: set font size to 20 using textSize
    yPos = 75;
    textAlign(CENTER, CENTER);
    textSize(20);
}

function draw() {
    background(220);

    fill(0);
    
    for (let i = 0; i < pokemons.length; i++) {
        text((i + 1) + ". " + pokemons[i], width / 2, yPos + i * 50);
    }
}