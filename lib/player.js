import {loadImage} from "./image_loader";

class Player {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        // this.draw = this.draw.bind(this);
        this.player = undefined;
        loadImage("./images/bbSprite.png").then(image => {
            this.player = image;
            draw();
        });
        this.score = 0;
        this.lives = 5;
        this.partX = 0;
        this.partY = 0;
        this.zoomX = 170;
        this.zoomY = 170;
        this.playerX = (this.canvas.width - this.playerWidth) / 2;
        this.playerY = (this.canvas.height - this.playerHeight) - 10;
        this.playerWidth = 50;
        this.playerHeight = 40;
        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
        this.downPressed = false;
        this.spacePressed = false;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this); 
        this.drawPlayer = this.drawPlayer.bind(this);
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler,false);
    }



    drawPlayer(){
        this.ctx.drawImage(this.player,
            this.partX, this.partY, // part of image to take -- width, height
            this.zoomX, this.zoomY, // zoom in and out on that part
            this.playerX, this.playerY, // where to show up x-axis, y-axis 
            this.playerWidth, this.playerHeight); // width, height of sprite
    }
    
    drawLives() {
        this.ctx.font = "18px Calibri";
        this.ctx.fillStyle = "skyblue";
        this.ctx.fillText("Lives: " + this.lives, this.canvas.width - 65, 20);
    }

    drawScore() {
        this.ctx.font = "18px Calibri";
        this.ctx.fillStyle = "skyblue";
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
            this.eftPressed = false;
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