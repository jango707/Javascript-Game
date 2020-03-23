export default class Paddle {
    constructor(gameWidth, gameHeight) {
      
      this.gameWidth = gameWidth;
      this.width = 80;
      this.height = 10;
  
      this.maxSpeed = 7;
      this.speed = 0;

      this.position = {
        x: gameWidth / 5.5 - this.width / 2,
        y: gameHeight /4 - this.height - 10
      };
    }
  
   moveLeft(){
    this.speed = -this.maxSpeed;
   }
   moveRight(){
    this.speed = this.maxSpeed;
   }

   stop(){
     this.speed = 0;
   }

    draw(ctx) {
      ctx.fillStyle = "darkslategray";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
     
      
    }

    update(deltaTime){
      if(!deltaTime)return;
      
      this.position.x += this.speed;

      if(this.position.x <0) this.position.x = 0;
      if(this.position.x > 220) this.position.x = 220;
    }
  
  }
  