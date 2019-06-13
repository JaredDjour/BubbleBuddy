# Bubble Buddy

## Background and Overview
Bubble Buddy is a game in which players must navigate Bubble Buddy as far as possible without running into an enemy. Bubble Buddy can attempt to evade enemies who block his path, or shoot bubbles at incoming enemies to send them floating away. The game is envisioned to be a mash-up of Bubble Bobble and Super Mario Bros.
 
## Functionality
Players will use the arrow keys to guide Bubble Buddy across the screen and use the space-bar to shoot bubbles. 


## Wireframes
![Wireframes](https://github.com/JaredDjour/BubbleBuddy/blob/master/wireframes.png?raw=true)

High Scores will be displayed to the left of the playing-screen, while  Links to personal-sites and directions to the game will be displayed to the right.

The playing-screen will show Bubble Buddy (a cute little dragon/dinosaur) running across a -road, with a blue sky and clouds in the background. Enemies will appear as Bubble Buddy travels, which must either be evaded or neutralized. Game intensity/speed will increase as the game ensues. 

## Techonologies Employed
* Vanilla JavaScript for game logic
* HTML5, CSS and Canvas for rendering
* Webpack to bundle various scripts into a single source

## Main files
* player.js
* background.js
* bubble.js
* enemy.js
* scoreboard.js

## MVPs
* Create Bubble Buddy sprite and be able to move him around
* Background scene changes as the player moves
* Bubbles float once shot from Bubble Buddy's mouth 
* Enemies cause the game to end on collision


## Development Timeline
* Day 1:
    * Complete Bubble Buddy Sprite
    * Implement keys to navigate him
* Day 2:
    * Complete rendering of background scene
    * Begin working on Bubble sprite
* Day 3: 
    * Complete Bubble sprite and add floating effect
    * Begin Enemies Sprite
* Day 4:
    * Complete Enemies Sprite and movement
    * Implement Game Over on enemy-collision
* Day 5:
    * Tweak everything
    * Implement Bonus Features if possible

## Bonus Features
* Add Bubble Buddy attack options:
    * Fire
    * Ice
* Have new enemies appear as you advance
* Implement Scoreboard