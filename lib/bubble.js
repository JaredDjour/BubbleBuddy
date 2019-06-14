class Bubble {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        // this.x = this.canvas.width / 2;
        this.x = 25;
        this.y = this.canvas.height - 30;
        this.dx = 1;
        this.dy = -1;
        this.bubbleRadius = 15;
    }

    drawBubble() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.bubbleRadius, 0, Math.PI * 2);
        this.ctx.strokeStyle = "#0079FF"; //"azure"
        // this.ctx.fillStyle = "white";
        this.ctx.stroke();
        this.ctx.closePath();

        this.x += this.dx;
        this.y += this.dy;

    }

}

export default Bubble;