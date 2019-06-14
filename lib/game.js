import Player from "./player";
import Enemy from "./enemy";
import Bubble from "./bubble";
import {loadImage} from "./image_loader";

class Game {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.enemies = [new Enemy(this.canvas, this.ctx)];
        this.bubbles = [new Bubble(this.canvas, this.ctx)];
        this.player = new Player(this.canvas, this.ctx);
        // this.enemy = new Enemy(this.canvas, this.ctx);
        this.score = 0;
        this.lives = 1;
        this.draw = this.draw.bind(this);
        loadImage("./images/bbSprite.png").then(image => {
            this.sprite = image;
            // this.draw();
        }).then(() => (loadImage("./images/bbSpriteLeft.png")))
        .then((image) => {
            this.leftSprite = image;
            this.draw();
        });
     
        
        // this.img = await loadImage("./images/bbSprite.png");
        // ctx.drawImage(img, 0, 0); 

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

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.enemies.forEach((el) => el.draw());
        this.bubbles.forEach((el) => el.draw());
        this.drawLives();
        this.drawScore();
        this.player.draw();
        // this.enemy.draw();
        this.ctx.drawImage(this.sprite,
            this.player.partX, this.player.partY, // part of image to take -- width, height
            this.player.zoomX, this.player.zoomY, // zoom in and out on that part
            this.player.playerX, this.player.playerY, // where to show up x-axis, y-axis 
            this.player.playerWidth, this.player.playerHeight); // width, height of sprite
 
        requestAnimationFrame(this.draw);
    }
}

export default Game;


    // if (x + dx < this.bubbleRadius || x + dx > canvas.width - this.bubbleRadius) {
    //     dx = -dx;
    // }

    // if (y + dy < this.bubbleRadius) {
    //     dy = -dy;
    // } else if (y + dy > canvas.height - this.bubbleRadius) {
    //     if (x > playerX && x < playerX + playerWidth) {
    //         dy = -dy;
    //     }
    //     else {
    //        lives--;
    //         if (!lives) {
    //             alert("GAME OVER");
    //             document.location.reload();
    //             // clearInterval(interval); // Needed for Chrome to end game
    //         }
    //         else {
    //             x = canvas.width / 2;
    //             y = canvas.height - 30;
    //             dx = 1;
    //             dy = -1;
    //             playerX = (canvas.width - playerWidth) / 2;
    //         };
    //     }
    // }


            // if (this.player.rightPressed && this.player.playerX < this.player.canvas.width - this.player.playerWidth + 10) {
        //     this.player.playerX += 6;
        // }
        // else if (this.player.leftPressed && this.player.playerX > 0) {
        //     this.player.playerX -= 6;
        // }
        // else if (this.player.upPressed && this.player.playerY > 0) {
        //     // this.player.playerY -= 6;
        //     this.player.jump();

        // }
        // else if (this.player.downPressed && this.player.playerY < (this.player.canvas.height - this.player.playerHeight)) {
        //     // this.player.playerY += 6;
        //     this.player.fall();
        // }
        // else if (this.player.spacePressed) {
        //     this.bubble.draw();
        // }