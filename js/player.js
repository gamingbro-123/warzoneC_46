class Player
{
    constructor()
    {
        this.name = "";
        this.healthBar = 100;
        this.status = 1;
        this.rank = 0;
        this.bullets = 100;
        this.team = "";
        this.index = null;
    }

    updatePlayer()
    {
        var playerIndex = this.team+"/Player"+this.index;
        database.ref(playerIndex).set({Name : this.name})

    }

    getCount()
    {

        var playerRef = database.ref("PlayerCount")
        playerRef.on("value", function(data) 
        {
            playerCount = data.val();
        })
    }

    updateCount(count)
    {
        database.ref("/").update({PlayerCount : count})
    }

    getPlayer()
    {

    }

    assignTeam()
    {
        var rand = playerCount;
        if(rand === 1 || rand === 3)
        {
            this.team = "Defenders";
            if(rand === 1)
            this.index = 1;
            else
            this.index = 2;
        }
        else
        {
            this.team = "Attackers";
            if(rand === 2)
            this.index = 1;
            else
            this.index = 2;
        }

        
    }


}