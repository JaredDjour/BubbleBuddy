import Bubble from "./bubble";
import {loadImage} from "./image_loader";
import _ from "lodash";
class Player {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.partX = 0;
        this.partY = 0;
        this.zoomX = 170;
        this.zoomY = 170;
        this.playerWidth = 47;
        this.playerHeight = 40;
        this.playerX = 0;
        this.playerY = (this.canvas.height - this.playerHeight);
        this.DY = 3;
        this.grounded = undefined;
        this.lastPressed = "right";
        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
        this.downPressed = false;
        this.spacePressed = false;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.shootBubbles = _.throttle(this.shootBubbles.bind(this), 250); 
        this.bubbles = [];
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    
    }

    shootBubbles() { 
        this.bubbles.push(new Bubble(this.canvas, this.ctx, this.playerX, this.playerY, this.lastPressed));
    } 

    // throttle(interval) {
    //     let tooSoon = false;
    //     return (...args) => {
    //         if (!tooSoon) {
    //             tooSoon = true;
    //             setTimeout(() => tooSoon = false, interval);
    //             this(...args);
    //         }
    //     };

    // }
    
    // throttle(1000,)
    // pleaseWork() {
    //     _.throttle(() => { this.shootBubbles(); }, 1000); 
    // }
    draw() {
        // const sec = _.throttle(this.shootBubbles() {
            
        // }, 1000);
        // const callback = _.throttle(() => { this.shootBubbles(); }, 1000); 
        
        this.bubbles.forEach((el) => {
            el.draw();

            if (el.bubbleX > el.bubbleRadius  &&  el.bubbleX < (el.canvas.width - 15) 
                && el.bubbleX < (el.playerX + 130) && el.bubbleX > (el.playerX - 80)) {
                el.bubbleY += 0.7;
                if (this.lastPressed == "right") {
                    el.bubbleX += 10;
                }
                else {
                    el.bubbleX -= 10;
                }
            }
            if (el.bubbleY < 150){
                this.bubbles.splice(el, 1);
            }
            el.bubbleY += el.dy;
        });
       
        this.bubbleY += this.dy;

        if (this.playerY >= (this.canvas.height - this.playerHeight)) {
            this.grounded = true;
        } else this.grounded = false;

        if (this.rightPressed && this.playerX < this.canvas.width - this.playerWidth + 10) {
            this.playerX += 4.5;
            this.lastPressed = "right";
        }
        if (this.leftPressed && this.playerX > 0) {
            this.playerX -= 4.5;
            this.lastPressed = "left";
        }
        // else if (this.upPressed && this.playerY > 0 && 
        //     this.playerY > (this.canvas.height - this.playerHeight - 86)) {  
        //     this.playerY -=  15;
        // }
        if (this.upPressed && this.playerY > 0 && this.grounded) {
            while (this.playerY > (this.canvas.height - this.playerHeight - 86)) {
                this.playerY -= 15;
            }
        }
        // else if (this.downPressed && this.playerY < (this.canvas.height - this.playerHeight)) { 
        // }
        if (this.spacePressed) {
            // setTimeout(this.shootBubbles, 1000);
            // _.throttle(() => { this.shootBubbles(); }, 1000, leading=true); 
            this.shootBubbles();
            // this.pleaseWork();
        }

        if (this.playerY < (this.canvas.height - this.playerHeight)) {
            this.playerY += this.DY;
        }

        // if (this.lastPressed == "right") {
        //     debugger
        //     this.ctx.drawImage(this.sprite,
        //         this.partX, this.partY, // part of image to take -- width, height
        //         this.zoomX, this.zoomY, // zoom in and out on that part
        //         this.playerX, this.playerY, // where to show up x-axis, y-axis 
        //         this.playerWidth, this.playerHeight); // width, height of sprite
        // } else {
        //     this.ctx.drawImage(this.leftSprite,
        //         this.partX, this.partY, // part of image to take -- width, height
        //         this.zoomX, this.zoomY, // zoom in and out on that part
        //         this.playerX, this.playerY, // where to show up x-axis, y-axis 
        //         this.playerWidth, this.playerHeight); // width, height of sprite 
        // }
    }

    keyDownHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = true;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = true;
        }
        else if (e.key == "Up" || e.key == "ArrowUp") {
            this.upPressed = true;
        }
        else if (e.key == "Down" || e.key == "ArrowDown") {
            this.downPressed = true;
        }
        else if (this.spacePressed == false && (e.which == "32" || e.code == "Space")) {
            this.spacePressed = true;
        }

    }

    keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = false;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = false;
        }
        else if (e.key == "Up" || e.key == "ArrowUp") {
            this.upPressed = false;
        }
        else if (e.key == "Down" || e.key == "ArrowDown") {
            this.downPressed = false;
        }
        else if (e.which == "32" || e.code == "Space") {
            this.spacePressed = false;
        }
    }
}

export default Player;