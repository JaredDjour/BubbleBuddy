import Bubble from "./bubble";
class Player {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.partX = 0;
        this.partY = 0;
        this.zoomX = 170;
        this.zoomY = 170;
        this.playerWidth = 47;
        this.playerHeight = 40;
        this.playerX = 0;
        this.playerY = (this.canvas.height - this.playerHeight);
        this.DY = 3;
        // this.lastPressed = "right";
        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
        this.grounded = true;
        this.jumping = false;
        this.bub = new Bubble(this.canvas, this.ctx, this.playerX, this.playerY);
        this.downPressed = false;
        this.spacePressed = false;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.bubble = new Bubble(this.canvas, this.ctx, this.playerX, this.playerY); 
        this.shootBubbles = this.shootBubbles.bind(this); 
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }


    jump() { 
    if (this.playerY == 360) {
        this.grounded = true;
        this.jumping = false;
    } else {
        this.jumping = true;
        this.grounded = false;
    }

        // debugger
        if (this.grounded) { 
            // debugger
            while(this.playerY > (this.canvas.height - this.playerHeight - 86)) {
                this.playerY -= this.DY;
            } 
            // debugger
            this.jumping = true;
            this.grounded = false;
        } 
    } 
      fall() {
        if (this.playerY === 273){
        // if (this.jumping){
            while(this.playerY < (this.canvas.height - this.playerHeight)){
            this.playerY += this.DY;
            }
            this.jumping = false;
            this.grounded = true;
        }
    }

    shootBubbles() { 
       const newBub = new Bubble(this.canvas, this.ctx, this.playerX, this.playerY)
       newBub.draw();
    } 

    draw() {
        this.bubble.draw();

        if (this.rightPressed && this.playerX < this.canvas.width - this.playerWidth + 10) {
            this.playerX += 6;
            this.lastPressed = "right";
        }
        else if (this.leftPressed && this.playerX > 0) {
            this.playerX -= 6;
            this.lastPressed = "left";
        }
        else if (this.upPressed && this.playerY > 0) {
            // this.playerY -= 6;
            this.jump();
            // this.fall();
        }
        else if (this.downPressed && this.playerY < (this.canvas.height - this.playerHeight)) {
            // this.playerY += 6;
            this.fall();
        }
         else if (this.spacePressed) {
            // this.bubble.draw();
            this.shootBubbles();
        }
    }

    keyDownHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = true;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = true;
        }
        else if (e.key == "Up" || e.key == "ArrowUp") {
            this.upPressed = true;
        }
        else if (e.key == "Down" || e.key == "ArrowDown") {
            this.downPressed = true;
        }
        else if (e.which == "32" || e.code == "Space") {
            this.spacePressed = true;
        }

    }

    keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = false;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = false;
        }
        else if (e.key == "Up" || e.key == "ArrowUp") {
            this.upPressed = false;
        }
        else if (e.key == "Down" || e.key == "ArrowDown") {
            this.downPressed = false;
        }
        else if (e.which == "32" || e.code == "Space") {
            this.spacePressed = false;
        }
    }
}

export default Player;