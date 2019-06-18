import Player from "./player";
import Enemy from "./enemy";
import Bubble from "./bubble";
import {loadImage} from "./image_loader";
import {throttle} from "lodash";

class Game {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = new Player(this.canvas, this.ctx);
        this.enemies = [new Enemy(this.canvas, this.ctx, this.player.playerX, this.player.playerY)];
        this.score = 0;
        this.alive = true;
        this.draw = this.draw.bind(this);
        this.addEnemies = this.addEnemies.bind(this);
        loadImage("./lib/images/bbSprite.png").then(image => {
            this.sprite = image;
            // this.draw();
        }).then(() => (loadImage("./lib/images/bbSpriteLeft.png")))
        .then((image) => {
            this.leftSprite = image;
            // this.draw();
        }).then(() => (loadImage("./lib/images/enemies/enemy1/enemy1Right.png")))
        .then(image => {
            this.enemySpriteRight = image;
            // this.draw();
        }).then(() => (loadImage("./lib/images/enemies/enemy1/enemy1Left.png")))
            .then((image) => {
                this.enemySpriteLeft = image;
                this.draw();
            }); 
    }

    // drawLives() {
    //     this.ctx.font = "18px Calibri";
    //     this.ctx.fillStyle = "#0079FF";
    //     this.ctx.fillText("Lives: " + this.lives, this.canvas.width - 65, 20);
    // }

    drawScore() {
        this.ctx.font = "18px Calibri";
        this.ctx.fillStyle = "#0079FF";
        this.ctx.fillText("Score: " + this.score, 10, 25);
    }

    addEnemies() {
        this.enemies.push(new Enemy(this.canvas, this.ctx, this.player.playerX, this.player.playerY));
    }

    draw() {
      
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.enemies.forEach((el) => {
            el.enemySprite = this.enemySpriteRight; 
            if (this.player.playerX > el.enemyX){
                el.enemySprite = this.enemySpriteRight;
                el.enemyX += 2; 
            } else if (this.player.playerX < el.enemyX) {
                el.enemySprite = this.enemySpriteLeft;
                el.enemyX -= 2;
            } 
            if (this.player.playerX <= el.enemyX + 28 && this.player.playerX >= el.enemyX - 24 && this.player.playerY >= el.enemyY - 20){
                // el.enemySprite = this.enemySpriteRight;
                this.alive = false;
            }


            this.ctx.drawImage(el.enemySprite,
                el.partX, el.partY, // part of image to take -- width, height
                el.zoomX, el.zoomY, // zoom in and out on that part
                el.enemyX, el.enemyY, // where to show up x-axis, y-axis 
                el.enemyWidth, el.enemyHeight);

            el.draw();      
        });


        if (!this.alive) {
            alert("GAME OVER");
            document.location.reload(true);
        }
      
        this.player.bubbles.forEach((bubbleEl) =>  {
            this.enemies.forEach((enemyEl) => {
                if (bubbleEl.bubbleX >= enemyEl.enemyX && bubbleEl.bubbleY >= enemyEl.enemyY){
                    this.player.bubbles.splice(this.player.bubbles.indexOf('bubbleEl'), 1);
                    // this.player.bubbles.splice(bubbleEl, 1);
                    this.enemies.splice(enemyEl, 1);
                    this.score += 1;
                    this.addEnemies();
                    setTimeout(this.addEnemies, 1000); 
                }
            });
        });

        if (this.player.lastPressed == "right"){
        this.ctx.drawImage(this.sprite,
            this.player.partX, this.player.partY, // part of image to take -- width, height
            this.player.zoomX, this.player.zoomY, // zoom in and out on that part
            this.player.playerX, this.player.playerY, // where to show up x-axis, y-axis 
            this.player.playerWidth, this.player.playerHeight); // width, height of sprite
        } else {
            this.ctx.drawImage(this.leftSprite,
                this.player.partX, this.player.partY, // part of image to take -- width, height
                this.player.zoomX, this.player.zoomY, // zoom in and out on that part
                this.player.playerX, this.player.playerY, // where to show up x-axis, y-axis 
                this.player.playerWidth, this.player.playerHeight); // width, height of sprite 
        }
      
        this.drawScore();
        this.player.draw(); 
      
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