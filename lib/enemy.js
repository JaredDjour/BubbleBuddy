import EnemyBubble from "./enemy_bubble";

class Enemy {
    constructor(canvas, ctx, playerX, playerY){
        this.canvas = canvas;
        this.ctx = ctx;
        this.partX = 0;
        this.partY = 0;
        this.zoomX = 100;
        this.zoomY = 100; 
        this.enemyWidth = 180;
        this.enemyHeight = 180;
        // this.enemyPadding = 10;
        this.enemyY = 357;
        this.enemyX = 450;
        this.enemyDy = 0;
        this.enemyDx = 0;
        this.playerX = playerX;
        this.playerY = playerY;
        this.bubbles = [];
        this.direction = "left";
        this.DY = 3;
        this.shootBubbles = this.shootBubbles.bind(this);
    }


    shootBubbles() {
        this.bubbles.push(new EnemyBubble(this.canvas, this.ctx, this.enemyX, this.enemyY, this.direction));
    } 

    drawEnemy() {
        this.bubbles.forEach((el) => {
            el.drawEnemyBubble();

            if (el.bubbleX > el.bubbleRadius && el.bubbleX < (el.canvas.width - 15)
                && el.bubbleX < (el.enemyX + 130) && el.bubbleX > (el.enemyX - 80)) {
                el.bubbleY += 0.7;
                if (this.direction == "right") {
                    el.bubbleX += 10;
                }
                else {
                    el.bubbleX -= 10;
                }
            }
            if (el.bubbleY < 150) {
                this.bubbles.splice(el, 1);
            }
            el.bubbleY += el.dy;
        });

        this.bubbleY += this.dy;


        // if (this.playerX < this.enemyX) {
        //     this.enemySprite = this.enemySpriteLeft;
        // } else if (this.playerX > this.enemyX) {
        //     this.enemySprite = this.enemySpriteRight;
        // } 
    }

}

export default Enemy;




