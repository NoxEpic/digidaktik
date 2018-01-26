var square;
var vol;

function setup() {
    createCanvas(600, 400);
    // Opret et Audio input
    mic = new p5.AudioIn();
    // Start Audio Input.
    mic.start();
    //opret en ny instans af square objektet (se square.js)
    square = new square(width/2, 100);
}

function draw() {
    background(0);    
    vol = mic.getLevel() * 10;  

    square.display();
    square.update();
    square.right(vol);
    
    
    //Koden nedenfor skriver teksten på skærmen og viser volumen med den røde cirkel
    fill(255);
    text("Volume: " + parseFloat(vol*10).toFixed(2), 20, 380);
}

/*
OPGAVER

Denne sketch opretter forbindelse til mikrofonen og gemmer inputtets volumen i variablen vol; 

Opgave 1
Se om du kan bruge ellipse(x, y, w, h) til at lave en rød volumecirkel lige ved siden af teksten, som (med sin størrelse) viser hvor høj lydstyrken er. 

Firkanten finder du i filen square.js. Lige nu har en square tre funktioner: display(), update() og right(). Gå over til filen square.js for at løse opgaverne;

*/