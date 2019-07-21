import EnemyBubble from "./enemy_bubble";

class Enemy {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.partX = 0;
        this.partY = 0;
        this.zoomX = 170;
        this.zoomY = 170;
        this.enemyWidth = 47;
        this.enemyHeight = 40;
        this.enemyX = 450;
        this.enemyY = (this.canvas.height - this.enemyHeight + 1);
        this.bubbles = [];
        this.direction = "left";
        this.DY = 3;
        this.shootBubbles = _.throttle(this.shootBubbles.bind (this), 2000); 

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


    }

}

export default Enemy;


  //for original enemy sprite:
        // this.partX = 0;
        // this.partY = 0;
        // this.zoomX = 100;
        // this.zoomY = 100; 
        // this.enemyWidth = 180;
        // this.enemyHeight = 180;
        // this.enemyY = 357;
        // this.enemyX = 450;
        // this.enemyDy = 0;
        // this.enemyDx = 0;

