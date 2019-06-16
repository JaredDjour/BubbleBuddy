import Player from "./player";
class Bubble {
    constructor(canvas, ctx, playerX, playerY){
        this.canvas = canvas;
        this.ctx = ctx;
        // this.x = this.canvas.width / 2;
        // this.bubbleX = 25;
        // this.y = this.canvas.height - 30;
        this.playerX = playerX;
        this.playerY = playerY;
        this.bubbleX = this.playerX + 45;
        // this.bubbleX = this.playerX;
        this.bubbleY = this.playerY + 15;
        this.dx = 1;
        this.dy = -1;
        this.bubbleRadius = 15;
        this.bubbles = [];
        this.bubbleCount = 5;
    }

    draw() {
        // debugger
        // for (let num = 0; num < this.bubbleCount; num++) { 
            this.ctx.beginPath();
            this.ctx.arc(this.bubbleX, this.bubbleY, this.bubbleRadius, 0, Math.PI * 2);
            this.ctx.strokeStyle = "#0079FF"; //"azure"
            // this.ctx.strokeStyle = "#00F11D"; //"electric green"
        // this.ctx.strokeStyle = "#FF0900"; 
            // this.ctx.strokeStyle = "white";
            this.ctx.stroke();
            this.ctx.closePath();

            // if (this.bubbleX < (this.canvas.width - 15) && this.bubbleX < (this.playerX + 130)) {
            //     // this.bubbleX += this.dx; 
            //     if (Player.lastPressed == "right"){
            //     this.bubbleX += 10;
            //     this.bubbleY += 0.6;
            //     }
            //     else{
            //         this.bubbleX -= 10;
            //         this.bubbleY += 0.6; 
            //     }
            // }
            // this.bubbleY += this.dy;
        // }

    }

}

export default Bubble;