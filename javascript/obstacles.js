class Obstacle {

    constructor(ctx, gameWidth, gameHeight) {

        this.ctx = ctx;
        this.width = gameWidth;
        this.height = gameHeight;
        this.playerVel = 0.5;


        
            this.posX= Math.random() * (this.width - 60) + 60;
            this.posY= Math.random() * (this.height - 60) + 60;

            // this.posX = 20;
            // this.posY = 30;
          
    }



    draw(ctx){
         console.log(this.posY, this.posX);
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.rect(this.posX, this.posY, 150, 30);

        // ctx.rect(position.x, this.position.y , 150, 30);
        ctx.stroke();
        ctx.closePath();
        
}

moveRight(){

    this.posX += this.playerVel;
}

   
}