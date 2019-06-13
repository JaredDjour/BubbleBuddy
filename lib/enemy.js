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
        
        for (var col = 0; col < this.enemyColumns; col++) {
            this.enemies[col] = [];
            for (var row = 0; row < this.enemyRows; row++) {
                this.enemies[col][row] = { x: 0, y: 0, status: 1 };
            }
        }

    }
    drawEnemies() {
        for (var col = 0; col < this.enemyColumns; col++) {
            for (var row = 0; row < this.enemyRows; row++) {
                if (this.enemies[col][row].status == 1) {
                    this.enemyX = (col * (this.enemyWidth + this.enemyPadding)) + this.enemyX;
                    this.enemyY = (row * (this.enemyHeight + this.enemyPadding)) + this.enemyY;
                    this.enemies[col][row].x = this.enemyX;
                    this.enemies[col][row].y = this.enemyY;
                    this.ctx.beginPath();
                    this.ctx.rect(this.enemyX, this.enemyY, this.enemyWidth, this.enemyHeight);
                    this.ctx.fillStyle = "red";
                    this.ctx.fill();
                    this.ctx.closePath();
                }
            }
        }
    }

}

export default Enemy;




