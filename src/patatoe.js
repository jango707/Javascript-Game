export default class Patatoe{
constructor(game){
    this.image = document.getElementById("hotPat");

    this.scoreTxt = document.getElementById("score");
    this.score = 0;

    this.deathTxt = document.getElementById("death");



    

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.position= {
        x:10, 
        y:10
    }
    this.speed = {
        x:2,
        y:1
    }

    this.size = 15;

}


draw(ctx){
    ctx.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.size,
        this.size
        );

}

update(deltaTime){
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    this.scoreTxt.textContent = ("Score: "+this.score);

    if(this.score >10 && this.speed.x>0)this.speed.x +=0.005;
    if(this.score >10 && this.speed.y>0)this.speed.y +=0.001;

    if(this.position.x > 280 || this.position.x < 0){
        this.speed.x = -this.speed.x;
    }
    if(this.position.y < 0){
        this.speed.y = -this.speed.y;
    }
    if(this.position.y > 145){
        //DEAD
        this.speed.y = 0;
        this.speed.x = 0;

        this.game.paddle.stop();
        this.deathTxt.style.display = 'block';
        this.deathTxt.textContent=("You died! Refresh page to restart the game!")
        

    }
    let bottomOfBall = this.position.y + this.size;
    let topOfPaddle = this.game.paddle.position.y;
    let leftSideOfPaddle = this.game.paddle.position.x;
    let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width;


    if (bottomOfBall >= topOfPaddle
        && this.position.x >= leftSideOfPaddle &&
        this.position.x +this.size <= rightSideOfPaddle
        ){
        this.speed.y = -this.speed.y;
        this.position.y = this.game.paddle.position.y - this.size;
        this.score += 10;
        
        
    }

    }
}