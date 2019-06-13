class Bubble {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 30;
        this.dx = 1;
        this.dy = -1;
        this.bubbleRadius = 15;
    }

    drawBubble() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.bubbleRadius, 0, Math.PI * 2);
        this.ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
        this.ctx.stroke();
        this.ctx.closePath();
    }

}

export default Bubble;