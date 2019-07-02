import Player from "./player";
class Bubble {
    constructor(canvas, ctx, playerX, playerY, lastPressed){
        this.canvas = canvas;
        this.ctx = ctx;
        // this.x = this.canvas.width / 2;
        // this.bubbleX = 25;
        // this.y = this.canvas.height - 30;
        this.playerX = playerX;
        this.playerY = playerY;
        this.lastPressed = lastPressed;
        if (this.lastPressed == "right"){
            this.bubbleX = this.playerX + 45;
        } else this.bubbleX = this.playerX;
        // this.bubbleX = this.playerX;
        // this.bubbleX = this.playerX + 45;
        // this.bubbleX = this.playerX;
        this.bubbleY = this.playerY + 15;
        this.dx = 1;
        this.dy = -1;
        this.bubbleRadius = 15;
        this.bubbles = [];
        // this.bubbleCount = 5;
        this.colors = ["#0079FF", "#00F11D", '#A800FF', "#FF7F00", "#FF0900", "#FFEF00"];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    draw() {
        // debugger
        // for (let num = 0; num < this.bubbleCount; num++) { 
            this.ctx.beginPath();
            this.ctx.arc(this.bubbleX, this.bubbleY, this.bubbleRadius, 0, Math.PI * 2);
            // const colors = ['#A800FF', '#0079FF', '#0079FF', '#0079FF'];
            // const colors2 = ["#0079FF", "#00F11D", '#A800FF', "#FFEF00", "#FF7F00", "#FF0900"];
            // this.ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
            // this.ctx.strokeStyle = colors2[Math.floor(Math.random() * colors2.length)];
            this.ctx.strokeStyle = this.color;
            // this.ctx.shadowBlur = 35;
            // this.ctx.shadowColor= 
            // this.ctx.shadowColor = colors2[Math.floor(Math.random() * colors2.length)];
            // this.ctx.strokeStyle = "#0079FF"; //"azure"
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

/* Name: Vivid Violet
Hex: #A800FF
RGB: (168, 0, 255)
CMYK: 0.341, 1, 0, 0

Name: Azure
Hex: #0079FF
RGB: (0, 121, 255)
CMYK: 1, 0.525, 0, 0

Name: Electric Green
Hex: #00F11D
RGB: (0, 241, 29)
CMYK: 1, 0, 0.879, 0.054

Name: Canary Yellow
Hex: #FFEF00
RGB: (255, 239, 0)
CMYK: 0, 0.062, 1, 0

Name: Orange(Color Wheel)
Hex: #FF7F00
RGB: (255, 127, 0)
CMYK: 0, 0.501, 1, 0

Name: Candy Apple Red
Hex: #FF0900
RGB: (255, 9, 0)
CMYK: 0, 0.964, 1, 0 */
