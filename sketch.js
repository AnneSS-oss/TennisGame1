var database,form;
var bg;
var canvas;
var tball, player1,player2;
var gameState = 0
var playerCount = 0;
var allPlayers;
var players;
var score;

function preload(){

    bg = loadImage("court.jpg");
    tball = loadImage("ball.gif");
    player1Image = loadImage("bracket.jpg");
    player2Image = loadImage("racket.jpg");

}

function setup(){
createCanvas(displayWidth,displayHeight);

    form = new Form();
}

function draw(){
    background(bg);

    form.display();
}