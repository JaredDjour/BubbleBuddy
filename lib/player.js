import Bubble from "./bubble";
class Player {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.score = 0;
        this.lives = 1;
        this.partX = 0;
        this.partY = 0;
        this.zoomX = 170;
        this.zoomY = 170;
        this.playerWidth = 47;
        this.playerHeight = 40;
        // this.playerX = (this.canvas.width - this.playerWidth) / 2;
        this.playerX = 0;
        this.playerY = (this.canvas.height - this.playerHeight);
        this.DY = 3;
        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
        this.grounded = true;
        this.jumping = false;
        this.downPressed = false;
        this.spacePressed = false;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.bubble = new Bubble(canvas, ctx); 
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }

    jump() { 
        if (this.grounded) { 
            while(this.playerY > (this.canvas.height - this.playerHeight - 86)) {
                this.playerY -= this.DY;
            } 
            this.jumping = true;
            this.grounded = false;
        } 
    } 
      fall() {
        if (this.jumping){
            while(this.playerY < (this.canvas.height - this.playerHeight)){
            this.playerY += this.DY;
            }
            this.jumping = false;
            this.grounded = true;
        }
    }
    drawPlayer() {
        this.bubble.drawBubble();
        
        if (this.rightPressed && this.playerX < this.canvas.width - this.playerWidth + 10) {
            this.playerX += 6;
        }
        else if (this.leftPressed && this.playerX > 0) {
            this.playerX -= 6;
        }
        else if (this.upPressed && this.playerY > 0) {
            // this.playerY -= 6;
            this.jump();
        }
        else if (this.downPressed && this.playerY < (this.canvas.height - this.playerHeight)) {
            // this.playerY += 6;
            this.fall();
        }
         else if (this.spacePressed) {
            this.bubble.drawBubble();
        }
    }
    drawLives() {
        this.ctx.font = "18px Calibri";
        this.ctx.fillStyle = "#0079FF";
        this.ctx.fillText("Lives: " + this.lives, this.canvas.width - 65, 20);
    }

    drawScore() {
        this.ctx.font = "18px Calibri";
        this.ctx.fillStyle = "#0079FF";
        this.ctx.fillText("Score: " + this.score, 10, 25);
    }

    scoreAdder() {
        setInterval(drawScore(), this.score++, 1000);
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