/** @type HTMLCanvasElement */
/** @type CanvasRenderingContext2D */

const game = {

    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    FPS: 60,
    time: undefined,
    player: undefined,
    packet: undefined,
    obstacles: [],
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
            this.moveDeliver();
            this.obstacle.moveRight();


        }, 1000 / 60);
    },


    reset() {

        this.deliver = new Deliver(this.ctx, this.width, this.height);
        this.destiny = new Destiny(this.ctx, this.width, this.height);
        this.packet = new Packet(this.ctx, this.width, this.height);
        this.obstacle = new Obstacle(this.ctx, this.width, this.height);
        


    },

    drawStatics() {


        this.deliver.draw(this.ctx);
        this.destiny.draw(this.ctx);
        this.packet.draw(this.ctx);
        this.obstacle.draw(this.ctx);



    },



    moveDeliver() {

        this.deliver.moveDelivery();
        this.obstacle.moveRight();

    },

    setDimensions() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }


    
}