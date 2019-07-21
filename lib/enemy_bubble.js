class EnemyBubble {
    constructor(canvas, ctx, enemyX, enemyY, lastPressed) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.enemyX = enemyX;
        this.enemyY = enemyY;
        this.lastPressed = lastPressed;
        if (this.lastPressed == "right") {
            this.bubbleX = this.enemyX + 45;
        } else this.bubbleX = this.enemyX;
        this.bubbleY = this.enemyY + 15;
        this.dx = 1;
        this.dy = -1;
        this.bubbleRadius = 15;
        this.colors = ["#0079FF", "#00F11D", '#A800FF', "#FF0900", "#FFEF00"];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    drawEnemyBubble() {
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.arc(this.bubbleX, this.bubbleY, this.bubbleRadius, 0, Math.PI * 2);
        const colors = ['#A800FF', '#0079FF', '#0079FF', '#0079FF'];
        let color = ["#0079FF", "#00F11D", '#A800FF', "#FF0900", "#FFEF00"];
        color = color[Math.floor(Math.random() * color.length)];

        // this.ctx.strokeStyle = color;
        this.ctx.strokeStyle = this.color;
        // this.ctx.fillStyle = this.color;
        // this.ctx.fill();
        this.ctx.shadowBlur = 35;
        this.ctx.shadowColor = colors[Math.floor(Math.random() * colors.length)];
        this.ctx.stroke(); 
        this.ctx.closePath();
        this.ctx.shadowBlur = 0;

    }

}

export default EnemyBubble;