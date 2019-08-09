# Production README

### Technologies
Vanilla JavaScript, HTML Canvas, CSS, and Webpack.

![BubbleBuddy Gif](https://github.com/JaredDjour/BubbleBuddy/blob/master/BubbleBuddy.gif?raw=true)


## BubbleBuddy
Bubble Buddy is a game in which the player must navigate our little friend to defeat the enemy. Bubble Buddy can attempt to evade the enemy while shooting them with his magic bubbles. The game was inspired by the retro game BubbleBobble.

[Live Demo](https://jareddjour.github.io/BubbleBuddy/)


### Code Excerpts
I've constructed a function which takes into account the positions and directions of both the player and enemy, effectively rendering collision-detection between the two. The function then deals damage to the player's health on contact with the enemy.

``` JavaScript
 if (this.player.playerX > this.enemy.enemyX){
                this.enemy.enemySprite = this.enemySpriteRight;
                this.enemy.direction = "right";
                this.enemy.enemyX += 1.5; 
            } else if (this.player.playerX < this.enemy.enemyX) {
                this.enemy.enemySprite = this.enemySpriteLeft;
                this.enemy.direction = "left";
                this.enemy.enemyX -= 1.5;

            } 
 
            if (this.player.playerX <= this.enemy.enemyX + 28 
                && this.player.playerX >= this.enemy.enemyX - 30 
                && this.player.playerY >= this.enemy.enemyY - 20) {
                if (this.enemy.enemySprite === this.enemySpriteRight 
                    && this.player.playerX < (this.canvas.width - this.player.playerWidth + 5)) {
                    this.player.playerX += 28;
                    this.enemy.enemyX -= 28;
                } else if (this.enemy.enemySprite === this.enemySpriteLeft && this.player.playerX > 15) {
                    this.player.playerX -= 28;
                    this.enemy.enemyX += 28;
                }
                this.health -= 1;
            }
            if (this.health < 1) {
                this.health = 100;
                this.lives -= 1;
            }
```

I developed functions which iterate through the player's and enemy's bubbles, enabling collision between bubbles and the opposing player. If a bubble makes contact with the opposing player it will inflict damage and 'pop' itself from the array; if no contact is made the bubble will float to a predetermined height before popping.

``` JavaScript

 this.player.bubbles.forEach((bubbleEl) => {
                if (bubbleEl.bubbleX >= this.enemy.enemyX - 5 && bubbleEl.bubbleX <= this.enemy.enemyX + this.enemy.enemyWidth 
                    && bubbleEl.bubbleY >= this.enemy.enemyY) {
                    this.player.bubbles.splice(this.player.bubbles.indexOf('bubbleEl'), 1);
                    if (this.player.lastPressed == "right" && this.enemy.enemyX < (this.canvas.width - this.enemy.enemyWidth)) {
                        this.enemy.enemyX += 18;
                        this.enemy.direction = "right";
                    } else if (this.player.lastPressed == "left" && this.enemy.enemyX > 15) {
                        this.enemy.enemyX -= 18;
                        this.enemy.direction = "left";
                    }
                    this.enemyHealth -= 2; 
                }
                if (this.enemyHealth < 1) {
                    this.enemyHealth = 100;
                    this.enemyLives -= 1;
                }
            });

            this.enemy.bubbles.forEach((enemyBubble) => {
                if (enemyBubble.bubbleX >= this.player.playerX - 5
                    && enemyBubble.bubbleX <= this.player.playerX + this.player.playerWidth
                    && enemyBubble.bubbleY >= this.player.playerY) {
                    this.enemy.bubbles.splice(this.enemy.bubbles.indexOf('enemyBubble'), 1);
                    if (this.enemy.direction == "right" && this.player.playerX < (this.canvas.width - this.player.playerWidth)) {
                        this.player.playerX += 38;
                    } else if (this.enemy.direction == "left" && this.player.playerX > 15) {
                        this.player.playerX -= 38;
                    }
                    this.health -= 10;
                } 
            });
              

```