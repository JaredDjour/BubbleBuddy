import {loadImage} from "./image_loader";
// import Player from "./player";

class Enemy {
    constructor(canvas, ctx, playerX, playerY){
        this.canvas = canvas;
        this.ctx = ctx;
        this.enemyRows = 1;
        this.enemyColumns = 3;
        this.partX = 0;
        this.partY = 0;
        this.zoomX = 100;
        this.zoomY = 100; 
        this.enemyWidth = 180;
        this.enemyHeight = 180;
        this.enemyPadding = 10;
        this.enemyY = 357;
        this.enemyX = 450;
        this.enemies = [];
        this.enemyDy = 0;
        this.enemyDx = 0;
        this.playerX = playerX;
        this.playerY = playerY;
        this.enemySprite = undefined;
        // loadImage("./lib/images/enemies/enemy1/enemy1Right.png").then(image => {
        //     this.enemySpriteRight = image;
        //     // this.draw();
        // }).then(() => (loadImage("./lib/images/enemies/enemy1/enemy1Left.png")))
        //     .then((image) => {
        //         this.enemySpriteLeft = image;
        //         this.draw();
        //     });

     

    }
    draw() {
        if (this.playerX < this.enemyX) {
            this.enemySprite = this.enemySpriteLeft;
        } else if (this.playerX > this.enemyX) {
            this.enemySprite = this.enemySpriteRight;
        }
        // this.ctx.drawImage(this.enemySprite,
        //     this.partX, this.partY, // part of image to take -- width, height
        //     this.zoomX, this.zoomY, // zoom in and out on that part
        //     this.enemyX, this.enemyY, // where to show up x-axis, y-axis 
        //     this.enemyWidth, this.enemyHeight); 
    }
    // enemyCollision() {
    // for (const col = 0; col < this.enemyColumns; col++) {
    //     for (const row = 0; row < this.enemyRows; row++) {
    //         const enemy = this.enemies[col][row];
    //         if (enemy.status == 1) {
    //             if (x > enemy.x && y > enemy.y && x < (enemy.x + enemyWidth) && y < enemy.y + enemyHeight) {
    //                 // dy = -dy;
    //                 enemy.status = 0;
    //             }
    //         }
    //     }
    // }
}


export default Enemy;




