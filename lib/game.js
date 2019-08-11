import Player from "./player";
import Enemy from "./enemy";
import {loadImage} from "./image_loader";

class Game {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = new Player(this.canvas, this.ctx);
        // this.enemies = [new Enemy(this.canvas, this.ctx, this.player.playerX, this.player.playerY)];
        this.enemy = new Enemy(this.canvas, this.ctx);
        //  this.player.playerX, this.player.playerY);
        this.health = 101;
        this.enemyHealth = 100;
        this.lives = 3;
        this.enemyLives = 3;
        this.enterPressed = this.enterPressed.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);

        this.drawGame = this.drawGame.bind(this);
         loadImage("./lib/images/bbSprite.png").then(image => {
            this.enemySpriteRight = image;
        }).then(() => (loadImage("./lib/images/bbSpriteLeft.png")))
        .then((image) => {
            this.enemySpriteLeft = image;
        }).then(() => (loadImage("./lib/images/enemies/enemy2/enemy2Right.png")))
        .then(image => {
            this.sprite = image;
        }).then(() => (loadImage("./lib/images/enemies/enemy2/enemy2Left.png")))
            .then((image) => {
                this.leftSprite = image;
                this.drawGame();
            });
    }

    keyDownHandler(e) {
      if (e.which == "13" || e.code == "Enter") {
            this.enterPressed = true;
        }

    }

    keyUpHandler(e) {
      if (e.which == "13" || e.code == "Enter") {
            this.enterPressed = false;
        }
    }
    drawLives() {
        this.ctx.font = "18px Calibri";
        this.ctx.fillStyle = "#0079FF";
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 4;
        this.ctx.strokeText("Lives: " + this.lives, 10, 20);
        this.ctx.fillText("Lives: " + this.lives, 10, 20);
        this.ctx.lineWidth = 1; 
    }

    drawHealth() {
        this.ctx.font = "18px Calibri";
        this.ctx.fillStyle = "#0079FF";
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 4;
        this.ctx.strokeText("health: " + this.health, 10, 40);
        this.ctx.fillText("health: " + this.health, 10, 40);
        this.ctx.lineWidth = 1; 
    }

    drawEnemyLives() {
        this.ctx.font = "18px Calibri";
        this.ctx.fillStyle = "#00f400";
        this.ctx.strokeStyle = 'white'; 
        this.ctx.lineWidth = 4;
        this.ctx.strokeText("Lives: " + this.enemyLives, this.canvas.width - 95, 20);
        this.ctx.fillText("Lives: " + this.enemyLives, this.canvas.width - 95, 20);
        this.ctx.lineWidth = 1; 
    }

    drawEnemyHealth() {
        this.ctx.font = "18px Calibri";
        this.ctx.fillStyle = "#00f400";
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 4;
        this.ctx.strokeText("health: " + this.enemyHealth, this.canvas.width - 95, 40);
        this.ctx.fillText("health: " + this.enemyHealth, this.canvas.width - 95, 40);
        this.ctx.lineWidth = 1; 
    }

    drawGame() {
      
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.player.playerX > this.enemy.enemyX){
                this.enemy.enemySprite = this.enemySpriteRight;
                this.enemy.direction = "right";
                this.enemy.enemyX += 1.5; 
            } else if (this.player.playerX < this.enemy.enemyX) {
                this.enemy.enemySprite = this.enemySpriteLeft;
                this.enemy.direction = "left";
                this.enemy.enemyX -= 1.5;

            } 
 
            if (this.player.playerX <= this.enemy.enemyX + 28 
                && this.player.playerX >= this.enemy.enemyX - 30 
                && this.player.playerY >= this.enemy.enemyY - 20) {
                if (this.enemy.enemySprite === this.enemySpriteRight 
                    && this.player.playerX < (this.canvas.width - this.player.playerWidth + 5)) {
                    this.player.playerX += 28;
                    this.enemy.enemyX -= 28;
                } else if (this.enemy.enemySprite === this.enemySpriteLeft && this.player.playerX > 15) {
                    this.player.playerX -= 28;
                    this.enemy.enemyX += 28;
                }
                this.health -= 1;
            }
            if (this.health < 1) {
                this.health = 100;
                this.lives -= 1;
            }

            this.player.bubbles.forEach((bubbleEl) => {
                if (bubbleEl.bubbleX >= this.enemy.enemyX - 5 && bubbleEl.bubbleX <= this.enemy.enemyX + this.enemy.enemyWidth 
                    && bubbleEl.bubbleY >= this.enemy.enemyY) {
                    this.player.bubbles.splice(this.player.bubbles.indexOf('bubbleEl'), 1);
                    if (this.player.lastPressed == "right" && this.enemy.enemyX < (this.canvas.width - this.enemy.enemyWidth)) {
                        this.enemy.enemyX += 18;
                        this.enemy.direction = "right";
                    } else if (this.player.lastPressed == "left" && this.enemy.enemyX > 15) {
                        this.enemy.enemyX -= 18;
                        this.enemy.direction = "left";
                    }
                    this.enemyHealth -= 2; 
                }
                if (this.enemyHealth < 1) {
                    this.enemyHealth = 100;
                    this.enemyLives -= 1;
                }
            });

            this.enemy.bubbles.forEach((enemyBubble) => {
                if (enemyBubble.bubbleX >= this.player.playerX - 5
                    && enemyBubble.bubbleX <= this.player.playerX + this.player.playerWidth
                    && enemyBubble.bubbleY >= this.player.playerY) {
                    this.enemy.bubbles.splice(this.enemy.bubbles.indexOf('enemyBubble'), 1);
                    if (this.enemy.direction == "right" && this.player.playerX < (this.canvas.width - this.player.playerWidth)) {
                        this.player.playerX += 38;
                    } else if (this.enemy.direction == "left" && this.player.playerX > 15) {
                        this.player.playerX -= 38;
                    }
                    this.health -= 10;
                } 
            });
              
        this.enemy.bubbles.forEach((enemyBubble) => {
            this.player.bubbles.forEach((bubbleEl) => {
                
                if (enemyBubble.bubbleX >= bubbleEl.bubbleX - 5 && enemyBubble.bubbleX <= bubbleEl.bubbleX + 5 
                    && enemyBubble.bubbleY >= bubbleEl.bubbleY - 10 && enemyBubble.bubbleY <= bubbleEl.bubbleY + 30) {
                    this.enemy.bubbles.splice(this.enemy.bubbles.indexOf('enemyBubble'), 1); 
                    this.player.bubbles.splice(this.player.bubbles.indexOf('bubbleEl'), 1);
                }

                if (enemyBubble.bubbleX >= this.player.playerX - 5 && enemyBubble.bubbleX <= this.player.playerX + this.player.playerWidth 
                    && enemyBubble.bubbleY >= this.player.playerY + 5 && enemyBubble.bubbleY <= this.player.playerY - 5) {
                    this.enemy.bubbles.splice(this.enemy.bubbles.indexOf('enemyBubble'), 1);
                    if (this.enemy.direction == "right" && this.player.playerX < (this.canvas.width - this.player.playerWidth)) {
                        this.player.playerX += 38;
                    } else if (this.enemy.direction == "left" && this.player.playerX > 15) {
                        this.player.playerX -= 38;
                    }
                    this.health -= 10;
                }
            });
        });
            
            if (this.enemy.direction == "right") {
                this.ctx.drawImage(this.enemySpriteRight,
                    this.enemy.partX, this.enemy.partY, // part of image to take -- width, height
                    this.enemy.zoomX, this.enemy.zoomY, // zoom in and out on that part
                    this.enemy.enemyX, this.enemy.enemyY, // where to show up x-axis, y-axis 
                    this.enemy.enemyWidth, this.enemy.enemyHeight);
            } else {
                this.ctx.drawImage(this.enemySpriteLeft,
                    this.enemy.partX, this.enemy.partY, // part of image to take -- width, height
                    this.enemy.zoomX, this.enemy.zoomY, // zoom in and out on that part
                    this.enemy.enemyX, this.enemy.enemyY, // where to show up x-axis, y-axis 
                    this.enemy.enemyWidth, this.enemy.enemyHeight);
            }

            if (this.player.lastPressed == "right") {
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
                this.enterPressed();
        this.drawLives();
        this.drawHealth();
        this.drawEnemyLives();
        this.drawEnemyHealth();
        this.enemy.drawEnemy();
        this.player.drawPlayer(); 
        this.enemy.shootBubbles(); 
                
        // if (this.health == 101) {
         
        //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //     this.ctx.font = "18px Calibri";
        //     this.ctx.fillStyle = "#0079FF";
        //     this.ctx.strokeStyle = 'white';
        //     this.ctx.lineWidth = 4;
        //     this.ctx.strokeText("Please read the Directions", ((this.canvas.width / 2) - 78), (this.canvas.height / 2) - 5);
        //     this.ctx.fillText("Please read the Directions", ((this.canvas.width / 2) - 78), (this.canvas.height / 2) - 5);
        //     this.ctx.strokeText("And press ENTER when ready to begin!", ((this.canvas.width / 2) - 125), (this.canvas.height / 2) + 15);
        //     this.ctx.fillText("And press ENTER when ready to begin!", ((this.canvas.width / 2) - 125), (this.canvas.height / 2) + 15);
           
        //     if (this.player.enterPressed == true) {
        //         this.health = 100;
        //     } 
        // }    
        if (this.enemyLives <= 0) {
            // alert("You Win! Play Again?");
            // document.location.reload(true);
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.font = "18px Calibri";
            this.ctx.fillStyle = "#0079FF";
            this.ctx.strokeStyle = 'white';
            this.ctx.lineWidth = 4;
            this.ctx.strokeText("You Win!", ((this.canvas.width / 2) - 32), (this.canvas.height / 2) - 15);
            this.ctx.fillText("You Win!", ((this.canvas.width / 2) - 32), (this.canvas.height / 2) - 15); 
            this.ctx.strokeText("Press ENTER to play again!", ((this.canvas.width / 2) - 92), (this.canvas.height / 2) + 5);
            this.ctx.fillText("Press ENTER to play again!", ((this.canvas.width / 2) - 92), (this.canvas.height / 2) + 5); 
            if (this.enterPressed) {
                debugger
                this.lives = 3;
                this.enemyLives = 3;
                this.health = 100;
                this.enemyHealth = 100;
                this.player.playerX = 0;
                this.enemy.enemyX = 450;
            }  
        } 
        else if (this.lives <= 0 ) {
            // alert("Computer Player Wins, Try Again!");
            // document.location.reload(true);
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.font = "18px Calibri";
            this.ctx.lineWidth = 4;
            this.ctx.fillStyle = "#00f400";
            this.ctx.strokeStyle = 'white';
            this.ctx.strokeText("Computer Player Wins!", ((this.canvas.width / 2) - 82), (this.canvas.height / 2) - 15); 
            this.ctx.fillText("Computer Player Wins!", ((this.canvas.width / 2) - 82), (this.canvas.height / 2) - 15);
            this.ctx.strokeText("Press ENTER to try again!", ((this.canvas.width / 2) - 88), (this.canvas.height / 2) + 15);
            this.ctx.fillText("Press ENTER to try again!", ((this.canvas.width / 2) - 88), (this.canvas.height / 2) + 15);  
            debugger
            if (this.enterPressed) {
                debugger
                this.lives = 3;
                this.enemyLives = 3;
                this.health = 100;
                this.enemyHealth = 100;
                this.player.playerX = 0;
                this.enemy.enemyX = 450;
            }  
        // } else if (this.enterCount % 2 == 0) {
        //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //     this.ctx.font = "18px Calibri";
        //     this.ctx.lineWidth = 4;
        //     this.ctx.fillStyle = "#00f400";
        //     this.ctx.strokeStyle = 'white';
        //     this.ctx.strokeText("Paused", 270, this.canvas.height / 2);
        //     this.ctx.fillText("Paused", 270, this.canvas.height / 2);  
        // }
        }
        else requestAnimationFrame(this.drawGame);
    }
}

export default Game;