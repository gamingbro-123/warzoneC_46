class Form
{
    constructor()
    {
        this.input = createInput("NAME");

        this.button = createButton("CLICK ME");

        this.greeting = createElement('h3');

        this.image = loadImage("Images/loginImage.jpg");


    }

    display()
    {
        this.input.position(width/2-200,height/2-300);

        this.button.position(width/2+10,height/2-300);

        this.button.mousePressed(()=>{
            this.input.hide();
             this.button.hide();  
        var myname = this.input.value();

        this.greeting.html("HELLO " + myname);
        this.greeting.position(width/2,height/2-400);
        player.name = myname;
        playerCount = playerCount+1;
        player.assignTeam();
        player.updateCount(playerCount);
        player.updatePlayer();



        })

        

       
        

    }
     
}