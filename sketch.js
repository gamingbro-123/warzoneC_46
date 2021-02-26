var database;
var gameState=0;
var playerCount;
var form;
var game;
var bgImg1;
var player;

function preload()
{
    bgImg1 = loadImage("Images/loginImage.jpg");

}
function setup()
{
    createCanvas(windowWidth,windowHeight);

    database = firebase.database();

    game = new Game();
    game.getGameState();
    game.start();

    

}

function draw()
{
    if(gameState === 0)
    {
        imageMode(CENTER);

        image(bgImg1,width/2,height/2,width,height);

    }
    

}