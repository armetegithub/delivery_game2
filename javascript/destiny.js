class Destiny extends Deliver {

    constructor(ctx, gameWidth, gameHeight) {

        super(gameWidth, gameHeight);

        this.ctx = ctx;
        this.width = 30;
        this.height = 30;
        this.x = 2;
        

        this.position = {

            x: gameWidth * Math.random() - 30,
            y: gameHeight * Math.random() - 30,
        };

    }
    draw(ctx) {

        ctx.fillStyle = '#327';
        ctx.fillRect(this.position.x, this.position.y, this.height, this.width);

    }

}