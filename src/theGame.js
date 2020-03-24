import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Patatoe from "./patatoe.js";

export default class TheGame{

    constructor(gameWidth, gameHeight){

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        }

    start(){
        this.paddle = new Paddle(this);
        this.ball = new Patatoe(this);

        new InputHandler(this.paddle);

        this.gameObjects = [this.ball, this.paddle];
    }

    update(deltaTime){
        this.gameObjects.forEach(object => object.update(deltaTime));
        
    }

    draw(ctx){
       this.gameObjects.forEach(object => object.draw(ctx));
    }
}
