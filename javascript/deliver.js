class Deliver {
  constructor(ctx, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.width = 30;
    this.height = 30;
    this.playerVel = 0.5;

    this.position = {
      x: Math.random() * (gameWidth - 60) + 60,
      y: Math.random() * (gameHeight - 60) + 60
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#321";
    ctx.fillRect(this.position.x, this.position.y, this.height, this.width);
    if (this.position.x > this.gameWidth) {
      this.position.x = this.gameWidth - 60;
    }
    if (this.position.y > this.gameHeight) {
      this.position.y = this.gameHeight + 60;
    }
  }

  moveDelivery() {
    window.onkeydown = e => {
      switch (e.keyCode) {
        case 37:
          console.log("izquierda");
          this.position.x -= 30;

          // left key pressed
          break;
        case 38:
          this.position.y -= 30;

          // up key pressed
          break;
        case 39:
         
          if (this.position.x > this.gameWidth) {
            this.position.x = this.gameWidth;
          } else {
            this.position.x += 30;
          }// right key pressed
          break;
        case 40:
          this.position.y += 30;
          // down key pressed
          break;
      }
    };
  }
}
