//formulario
class Form{
    constructor(){
        //imput=caja de texto
        this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
        this.playButton = createButton("Jugar");
        this.titleImg = createImg("./assets/title.png", "game title");
        this.greeting = createElement("h2");
        console.log('si funcioa el constructor 1/6')
    }
    setElementsPosition(){
        this.titleImg.position(200,50);
        this.input.position(807,400);
        this.greeting.position(590,300);
        this.playButton.position(822,450);
        console.log('funciona el setElementsPosition 2/6')
    }
    setElementsStyle(){
        this.titleImg.class('gameTitle');
        this.input.class('customInput');
        this.greeting.class('greeting');
        this.playButton.class('customButton');
        console.log('funciona el setElementsStyle 3/6')
    }
    display(){
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMausePressed();
        console.log('funciona el display 4/6')
    }
    hide(){
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
        console.log('funciona el hide 5/6')
    }
    handleMausePressed(){
        this.playButton.mousePressed(()=>{
            this.input.hide();
            this.playButton.hide();

            var message = `Hola ${this.input.value()}
            </br>espera a que otro jugador se una...`;
            this.greeting.html(message);
            playerCount += 1;
            player.name = this.input.value();
            console.log('nombre'+ player.name);
            playe.index = playerCount;
            player.addPlayer();
            player.updateCount(playerCount);
            player.getDistance();
        });
    console.log('funciona el handleMausePressed 6/6 termian los cosoles de form')
    }
}