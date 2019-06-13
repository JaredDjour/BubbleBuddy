import Player from "./player";
import Bubble from "./bubble";
import Enemy from "./enemy";
import {collisionDetection} from "./collision";

class Game {
    constructor(canvas, ctx){
       this.canvas = canvas;
       this.ctx = ctx;
       this.player = new Player(this.canvas, this.ctx);
       this.bubble = new Bubble(this.canvas, this.ctx);
       this.enemy = new Enemy(this.canvas, this.ctx);
       this.draw = this.draw.bind(this);
    }


    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.drawLives();
        this.player.drawScore();
        this.player.drawPlayer();
        this.bubble.drawBubble();
        collisionDetection();
        this.bubble.x += bubble.dx;
        this.bubble.y += bubble.dy;

        if (this.player.rightPressed && this.player.playerX < this.canvas.width - this.player.playerWidth) {
            this.player.playerX += 6;
        }
        else if (this.player.leftPressed && this.player.playerX > 0) {
            this.player.playerX -= 6;
        }
        else if (this.player.upPressed && this.player.playerY > 0) {
            this.player.playerY -= 6;
        }
        else if (this.player.downPressed && this.player.playerY < (this.canvas.height - this.player.playerHeight - 10)) {
            this.player.playerY += 6;
        }
        else if (this.player.spacePressed) {
            this.bubble.drawBubble();
        }

        requestAnimationFrame(this.draw);
    }
}

export default Game;



    // ctx.drawImage(player,
    //             0, 0, // part of image to take -- width, height
    //             170, 170, // zoom in and out on that part
    //             playerX, playerY, // where to show up x-axis, y-axis 
    //             playerWidth, playerHeight) // width, height of sprite
    // ;

   

    // if (x + dx < bubbleRadius || x + dx > canvas.width - bubbleRadius) {
    //     dx = -dx;
    // }

    // if (y + dy < bubbleRadius) {
    //     dy = -dy;
    // } else if (y + dy > canvas.height - bubbleRadius) {
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
