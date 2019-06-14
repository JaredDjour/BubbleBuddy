class Enemy {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.enemyRows = 1;
        this.enemyColumns = 3;
        this.enemyWidth = 20;
        this.enemyHeight = 20;
        this.enemyPadding = 10;
        this.enemyY = 355;
        this.enemyX = 365;
        this.enemies = [];
        this.enemyDy = 0;
        // this.enemyDx = 0;
        
        for (var col = 0; col < this.enemyColumns; col++) {
            this.enemies[col] = [];
            for (var row = 0; row < this.enemyRows; row++) {
                this.enemies[col][row] = { x: 0, y: 0, status: 1 };
            }
        }

    }
    draw() {
        for (var col = 0; col < this.enemyColumns; col++) {
            for (var row = 0; row < this.enemyRows; row++) {
                if (this.enemies[col][row].status == 1) {
                    this.enemyX = (col * (this.enemyWidth + this.enemyPadding)) + 500 ;
                    this.enemyY = (row * (this.enemyHeight + this.enemyPadding)) + 370;
                    this.enemies[col][row].x = this.enemyX;
                    this.enemies[col][row].y = this.enemyY;

                    this.ctx.beginPath();
                    this.ctx.rect(this.enemyX, this.enemyY, this.enemyWidth, this.enemyHeight);
                    // this.ctx.fillStyle = "skyblue";
                    this.ctx.fillStyle = "#0079FF"; //"azure"
                    this.ctx.fill();
                    this.ctx.closePath();
                }
            }
        }
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




