import {loadImage} from "./image_loader";

class Enemy {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
       
        loadImage("./images/enemies/enemy1/enemy1Right.png").then(image => {
            this.enemySprite = image;
            this.draw();
        });

        this.enemyRows = 1;
        this.enemyColumns = 3;
        this.partX = 0;
        this.partY = 0;
        this.zoomX = 100;
        this.zoomY = 100; 
        this.enemyWidth = 200;
        this.enemyHeight = 200;
        this.enemyPadding = 10;
        this.enemyY = 352;
        this.enemyX = 450;
        this.enemies = [];
        this.enemyDy = 0;
        this.enemyDx = 0;
        
     

    }
    draw() {
        this.ctx.drawImage(this.enemySprite, 
            this.partX, this.partY, // part of image to take -- width, height
            this.zoomX, this.zoomY, // zoom in and out on that part
            this.enemyX, this.enemyY, // where to show up x-axis, y-axis 
            this.enemyWidth, this.enemyHeight);

    }
    enemyCollision() {
    for (const col = 0; col < this.enemyColumns; col++) {
        for (const row = 0; row < this.enemyRows; row++) {
            const enemy = this.enemies[col][row];
            if (enemy.status == 1) {
                if (x > enemy.x && y > enemy.y && x < (enemy.x + enemyWidth) && y < enemy.y + enemyHeight) {
                    // dy = -dy;
                    enemy.status = 0;
                }
            }
        }
    }
}

}

export default Enemy;




