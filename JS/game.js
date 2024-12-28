class Game{
    constructor(){
        this.resetTitle = createElement("h2");
        this.resetButton = createButton("");
        this.Puntuacion = createElement("h2");
    }

    //elements oculta elementos
    elements(){
        form.hide();
        form.titleImg.position(70,60);
        form.titleImg.class("gameTitleAfterEffect")
        this.resetTitle.html("Reiniciar el Juego");
        this.resetTitle.class("resetText");
        this.resetTitle.position(width,height /2);
        this.resetButton.class("resetButtom");
        this.resetButton.position(width,height /2+50);
        this.Puntuacion.html("Puntuacion");
        this.Puntuacion.class("resetText");
        this.Puntuacion.position(width,height /3);
    }

    addSprites(spriteGroup, numbreOfSprites, spritesImages, spritesScale, position=[]){
        //mandar a dibujar los objetos
        for(var i = 0; i < numbreOfSprites;++i){
            var X,Y;
            if(position.length>0){
                X = position[i].x;
                Y = position[i].y;
                spritesImages = position[i].image;
            }
            var sprite = createSprite(X,Y);
            sprite.addImage("sprite", spritesImages);
            sprite.scale = spritesScale;
            spriteGroup.add(sprite);
        }
    }

    play(){
        //anexo de formulario player y los elementos a interactuar
        this.elements();
        Players.getPlayersInfo();
        Players.getCarsAtEnd()
        //agreagar if para evaluar jugadores indefinidos
        //declarar un form para el index de todos los jugadores 
        //anexo de barras de vida, monedas, tanques de gas, movimiento del carro, obstaculos
        var index = 0;
        for(var plr in allPlayers){
            index = index + 1;
            //usar la bd para mostrar los autos en direccion X y Y
            var x = allPlayers[plr].positionX;
            var y = height - allPlayers[plr].positionY;
            //agragar tirmpo de vida
            var curentLife = allPlayers[plr].live;
            if(curentLife <= 0){
                cars[index - 1].changeImage("blast");
                cars[index - 1].scale = 0.5;
            }
            cars[index - 1].position.x = x;
            cars[index - 1].position.y = y;
            if(index === player.index){
                if(player.life <= 0){
                    //activar imagen de explocion
                    this.blast = true;
                    this.playerMoving = false;
                }
                //cambiar la posiscion de camara en posiscion Y
                camera.position.y = cars[index - 1].position.y = y;
            }
            if(this.playerMoving){
                player.positionY += 4;
                player.update();
            }
            //manejo de eventos del teclado
            // manejando eventos teclado
            this.handlePlayerControls();

            // Línea de meta
            const finshLine = height * 6 - 100;
            if(player.positionY > finshLine){
                gameState = 2;
                player.rank += 1;
                Player.updateCarsAtEnd(player.rank);
                player.update();
                this.showRank();
            }
            drawSprites();
        }
        //anexo a la base de datos y el movimiento del auto

        //mandar a llamar metodo para reinicio hundleResetButton
    }

    start(){
        //referencia con formulario player y anexo de imagenes para cada participante
        player = new Players();
        playerCount = player.getCount();
        form = new form();
        form.display();
        auto1 = createSprite(width/2-150,height/3);
        auto1.addImage("P1",auto1img);
        auto1.scale = 0.5;
        auto2 = createSprite(width/2,height/3);
        auto2.addImage("P2", auto2img);
        auto2.scale = 0.5;
        auto3 = createSprite(width/2+150,height/3);
        auto3.addImage("P3", auto3img);
        auto3.scale = 0.5;
        cars = [auto1, auto2, auto3];
        //anexo de objetos extras
        //this.addSprites()
    }

    getState(){
        //hacer referencia al la base de datos y se optiene el "State"
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data)
        {gameState = data.val()});
    }

    update(state){
        //dar de alta el estado del juego "state"
        database.ref("/").update({gameState:state});
    }

    handlePlayerControls(){
        //agregar condicionales para control de jugador
    }

    gameOverLoser(){
        swal({
            title:"Fin del juego tremendo manco",
            text:"Suerte para la proxima, manco",
            imageUrl:"https://i.postimg.cc/zB5cFhNr/Manos-para-quitar-lo-manco.jpg", imageSize:"100 x 100",
            confirmButtonText:"Asta luago manco"
        });
    }

    gameOverWiner(){
        swal({
            title:"Que pro",
            text:"Eres el mejor",
            imageUrl:"https://i.postimg.cc/qBWZ1W4w/que-pro.jpg", imageSize:"100 x 100",
            confirmButtonText:"Sigue asi papu"
        });
    }

    end(){
        console.log("fin del juego")
    }

    /*showLeatherBoard(){
    se anexa el nombre, rango y cosas de los jugadores 
    }*/
}