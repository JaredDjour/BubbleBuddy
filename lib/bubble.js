class Bubble {
    constructor(canvas, ctx, playerX, playerY, lastPressed){
        this.canvas = canvas;
        this.ctx = ctx;
        this.playerX = playerX;
        this.playerY = playerY;
        this.lastPressed = lastPressed;
        if (this.lastPressed == "right"){
            this.bubbleX = this.playerX + 45;
        } else this.bubbleX = this.playerX;
        this.bubbleY = this.playerY + 15;
        this.dx = 1;
        this.dy = -1;
        this.bubbleRadius = 15;
        this.colors = ["#0079FF", "#00F11D", '#A800FF', "#FF0900", "#FFEF00"];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    drawBubble() {
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(this.bubbleX, this.bubbleY, this.bubbleRadius, 0, Math.PI * 2);
        const colors = ['#A800FF', '#0079FF', '#0079FF', '#0079FF'];
        // let color = ["#0079FF", "#00F11D", '#A800FF', "#FF0900", "#FFEF00"];
        // color = color[Math.floor(Math.random() * color.length)];

        // this.ctx.strokeStyle = color;
        this.ctx.strokeStyle = this.color;
        this.ctx.fillStyle = "red";
        // this.ctx.shadowBlur = 35;
        // this.ctx.shadowColor = colors[Math.floor(Math.random() * colors.length)];
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.shadowBlur = 0;
    }

}

export default Bubble;