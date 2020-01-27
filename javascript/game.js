/** @type HTMLCanvasElement */
/** @type CanvasRenderingContext2D */

const game = {

    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    FPS: 60,
    time: undefined,
    counter: 0,
    player: undefined,
    packet: undefined,
    obstaclesArr: [],
    obstaclesVer: [],
    keys: {

        TOP_KEY: 38,
        RIGHT_KEY: 39,
        DOWN_KEY: 40,
        LEFT_KEY: 37,
    },
  

    init() {

        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');
        this.ctx = this.canvas.getContext("2d");
        this.setDimensions();
        this.start();

    },


    start() {

        this.reset();

        this.interval = setInterval(() => {

            this.clear();
            this.drawStatics();
            this.pushObstacle();
            this.clearObstacles();
            this.drawObstacles();
            this.moveDeliver();
            
            
            this.obstacle.moveRight();
            this.obstacle2.moveRight();
            this.counter++;

          


        }, 1000 / 60);
        
    },


    reset() {

        this.deliver = new Deliver(this.ctx, this.width, this.height);
        
        this.destiny = new Destiny(this.ctx, this.width, this.height);
        this.packet = new Packet(this.ctx, this.width, this.height);
        this.obstacle = new Obstacle(this.ctx, this.width, this.height);
        this.obstacle2 = new Obstacle(this.ctx, this.width, this.height);
        this.obstacleVertical = new Obstaclevertical(this.ctx, this.width, this.height, this.counter);
        this.obstacleVertical2 = new Obstaclevertical(this.ctx, this.width, this.height, this.counter);
        this.circle = new Circle(this.ctx, this.width, this.height, 25);
        

        // if(this.counter % 30 == 0){

        
         
        // this.obstaclesArr.push(obstacle);
        
        // }


    },

    drawStatics() {


        this.deliver.draw(this.ctx);
        this.destiny.draw(this.ctx);
        this.packet.draw(this.ctx);
        this.obstacleVertical.draw(this.ctx);
        this.obstacleVertical2.draw(this.ctx);
        this.circle.draw(this.ctx);
        
        
       
    },

    moveDeliver() {

        this.deliver.moveDelivery();
        this.obstacle.moveRight();
        this.obstacleVertical.moveDown();
        this.obstacleVertical2.moveDown();
        this.circle.move();

    },

    setDimensions() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    clearObstacles() {
        this.obstaclesArr = this.obstaclesArr.filter(obs => obs.posX <= this.width);
      },



    

    drawObstacles(){

        this.obstaclesArr.forEach((obstacle) => {
            console.log(obstacle);
            this.obstacle.draw(this.ctx);
            this.obstacle2.draw(this.ctx);

            
        });
    },


    pushObstacle(){

       

        if(this.counter % 100 === 0){
            this.obstaclesArr.push(new Obstacle(this.ctx, this.width, this.height, this.counter));
        }
    },

    gameOver() {
        clearInterval(this.interval);
      },

    pushVerticalObstacule(){

        if(this.counter % 100 === 0){

            this.obstacleVertical.push(new Obstaclevertical(this.ctx, this.width, this.height, this.counter));


        }
     
    },

    isCollision() {
        return this.obstaclesArr.some(obstacle => {
          return (
            this.deliver.x + this.deliver.width >= obstacle.posX &&
            this.deliver.y + this.deliver.height >= obstacle.posY &&
            this.player.x <= obstacle.posX + obstacle.width
          );
        });
      },
    
    }