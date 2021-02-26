class Game
{
    constructor()
    {


    }

    getGameState()
    {
        var gameStateRef = database.ref("GameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        }
        )
    }

    start()
    {
        if(gameState === 0)
        {
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
        }
    }

   
}