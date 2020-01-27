class Obstacle {
  constructor(ctx, gameWidth, gameHeight, counter) {
    this.ctx = ctx;
    this.counter = counter;
    this.width = gameWidth;
    this.height = gameHeight;
    this.playerVel = 5;

    this.posX = Math.random() * (this.width - 60) + 60;
    this.posY = Math.random() * (this.height - 60) + 60;

    // this.posX = 20;
    // this.posY = 30;
  }

  draw(ctx) {
    console.log(this.posY, this.posX);
    ctx.fillStyle = "rgb(70, 160, 73)";
    ctx.beginPath();
    ctx.rect(this.posX, this.posY, 150, 30);
    ctx.stroke();
    ctx.closePath();
  }

  moveRight() {
    this.posX++;

    this.posX += this.playerVel;

    if (this.posX > this.width - 10) {
      this.posX = this.playerVel * -1;
    }
  }
}

class Obstaclevertical extends Obstacle {
  constructor(ctx, gameWidth, gameHeight, counter) {
    super(ctx, gameWidth, gameHeight, counter);

    this.ctx = ctx;
    this.counter = counter;
    this.width = gameWidth;
    this.height = gameHeight;
    this.playerVel = 3;

    this.posX = Math.random() * (this.width - 60) + 60;
    this.posY = Math.random() * (this.height - 60) + 60;
  }

  draw(ctx) {
    console.log(this.posY, this.posX);
    ctx.fillStyle = "rgb(70, 160, 73)";
    ctx.beginPath();
    ctx.rect(this.posX, this.posY, 30, 150);
    ctx.stroke();
    ctx.closePath();
  }

  moveDown() {
    this.posY += this.playerVel;

    if (this.posY > this.width - 150) {
      this.posY = this.playerVel * -1;
    }
  }
}
class Circle extends Obstacle {
  constructor(ctx, gameWidth, gameHeight, radio) {
    super(ctx, gameWidth, gameHeight);

    this.ctx = ctx;
    // this.counter = counter;
    this.width = gameWidth;
    this.height = gameHeight;
    this.playerVelX = Math.floor(Math.random() * 2 + 5);
    this.playerVelY = Math.floor(Math.random() * 2 + 5);
    this.radio = radio;

    this.posX = Math.random() * (this.width - 60) + 60;
    this.posY = Math.random() * (this.height - 60) + 60;

    if (Math.floor(Math.random() * 2) === 0) {
      this.posX = -this.posX;
    }

    if (Math.floor(Math.random() * 2) === 0) {
      this.playerVelX = -this.playerVelX;
    }
    if (Math.floor(Math.random() * 2) === 0) {
      this.playerVelY = -this.playerVelY;
    }
  }

  draw(ctx) {
    ctx.beginPath();

    ctx.arc(this.posX, this.posY, this.radio, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();
  }

  move() {
    this.posX += this.playerVelX;
    this.posY += this.playerVelY;

    if (this.posX - 30 / 2 < 0 && this.playerVelX < 0) {
      this.playerVelX = -this.playerVelX;
    }
    if (this.posX + 30 / 2 > this.width && this.playerVelX > 0) {
      this.playerVelX = -this.playerVelX;
    }
    if (this.posY - 30 / 2 < 0 && this.playerVelY < 0) {
      this.playerVelY = -this.playerVelY;
    }
    if (this.posY + 30 / 2 > this.height && this.playerVelY > 0) {
      this.playerVelY = -this.playerVelY;
    }
  }
}
