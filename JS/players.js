class Players{
    constructor(){
        /*this.player1 = createElement("h2");
        this.player2 = createElement("h2");
        this.player3 = createElement("h2");*/
        this.name = null;
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
        this.rank = 0;
        //dar de alta la gas, hp, xp
    }

    addPlayer(){
        //referencia de la base de datos
        var playerIndex = + ("players/player"+this.index);
        //generar posiscione del jugador
        if (this.index===1) {
            this.positionX=700;
            this.positionY=500;            
        } else {
            this.positionX=100;
            this.positionY=500;
        }
        database.ref(playerIndex).set({
            name:this.name, positionX:this.positionX, positionY:this.positionY, rank:this.rank
        });
        console.log("si funciono el add player 1/8");
    }

    getDistance(){
        //agregar una distancia en base de datos
        var playerDistanceRef=database.ref("players/player"+this.index);
        playerDistanceRef.on("value", data => {var data = data.val();this.positionX = data.positionX; this.positionY= data.positionY;});
        console.log('si funciona el getDistance 2/8');
    }

    getCount(){
        //hacer conteo de los jugadores
        var playerCountRef=database.ref("playersCount");
        playerCountRef.on("value", data => {playerCount=data.val();});
        console.log('si funciona el getDistance 3/8')
    }

    updateCount(count){
        database.ref("/").update({playerCount:count});
        console.log('si funciona el updateCount 4/8');
    }

    update(){
        var playerIndex = "player/players" + this.index;
        database.ref(playerInex).update({positionX:this.positionX,positionY:this.positionY, rank:this.rank});
        console.log('si funciona el update 5/8');
    }

    static getPlayersInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", data => {allPlayers = data.val();});
        console.log('si funciona el static 6/8');
    }

    getCarsAtEnd(){
        database.ref("carsAtEnd").on("value", data => {this.rank = data.val();});
        console.log('si funciona el getCarsAtEnd 7/8');
    }

    static updateCarsAtEnd(rank){
        database.ref("/").update({carsAtEnd:rank});
        console.log('si funciona static 8/8 terminan lod consoles de players');
    }
}