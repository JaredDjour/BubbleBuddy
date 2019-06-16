/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/bubble.js":
/*!***********************!*\
  !*** ./lib/bubble.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./lib/player.js\");\n\nclass Bubble {\n    constructor(canvas, ctx, playerX, playerY){\n        this.canvas = canvas;\n        this.ctx = ctx;\n        // this.x = this.canvas.width / 2;\n        // this.bubbleX = 25;\n        // this.y = this.canvas.height - 30;\n        this.playerX = playerX;\n        this.playerY = playerY;\n        this.bubbleX = this.playerX + 45;\n        // this.bubbleX = this.playerX;\n        this.bubbleY = this.playerY + 15;\n        this.dx = 1;\n        this.dy = -1;\n        this.bubbleRadius = 15;\n        this.bubbles = [];\n        // this.bubbleCount = 5;\n    }\n\n    draw() {\n        // debugger\n        // for (let num = 0; num < this.bubbleCount; num++) { \n            this.ctx.beginPath();\n            this.ctx.arc(this.bubbleX, this.bubbleY, this.bubbleRadius, 0, Math.PI * 2);\n            this.ctx.strokeStyle = \"#0079FF\"; //\"azure\"\n            // this.ctx.strokeStyle = \"#00F11D\"; //\"electric green\"\n        // this.ctx.strokeStyle = \"#FF0900\"; \n            // this.ctx.strokeStyle = \"white\";\n            this.ctx.stroke();\n            this.ctx.closePath();\n\n            // if (this.bubbleX < (this.canvas.width - 15) && this.bubbleX < (this.playerX + 130)) {\n            //     // this.bubbleX += this.dx; \n            //     if (Player.lastPressed == \"right\"){\n            //     this.bubbleX += 10;\n            //     this.bubbleY += 0.6;\n            //     }\n            //     else{\n            //         this.bubbleX -= 10;\n            //         this.bubbleY += 0.6; \n            //     }\n            // }\n            // this.bubbleY += this.dy;\n        // }\n\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bubble);\n\n//# sourceURL=webpack:///./lib/bubble.js?");

/***/ }),

/***/ "./lib/enemy.js":
/*!**********************!*\
  !*** ./lib/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image_loader */ \"./lib/image_loader.js\");\n\n// import Player from \"./player\";\n\nclass Enemy {\n    constructor(canvas, ctx, playerX, playerY){\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.enemyRows = 1;\n        this.enemyColumns = 3;\n        this.partX = 0;\n        this.partY = 0;\n        this.zoomX = 100;\n        this.zoomY = 100; \n        this.enemyWidth = 200;\n        this.enemyHeight = 200;\n        this.enemyPadding = 10;\n        this.enemyY = 352;\n        this.enemyX = 450;\n        this.enemies = [];\n        this.enemyDy = 0;\n        this.enemyDx = 0;\n        this.playerX = playerX;\n        this.playerY = playerY;\n        this.enemySprite = undefined;\n        // loadImage(\"./lib/images/enemies/enemy1/enemy1Right.png\").then(image => {\n        //     this.enemySpriteRight = image;\n        //     // this.draw();\n        // }).then(() => (loadImage(\"./lib/images/enemies/enemy1/enemy1Left.png\")))\n        //     .then((image) => {\n        //         this.enemySpriteLeft = image;\n        //         this.draw();\n        //     });\n\n     \n\n    }\n    draw() {\n        if (this.playerX < this.enemyX) {\n            this.enemySprite = this.enemySpriteLeft;\n        } else if (this.playerX > this.enemyX) {\n            this.enemySprite = this.enemySpriteRight;\n        }\n        // this.ctx.drawImage(this.enemySprite,\n        //     this.partX, this.partY, // part of image to take -- width, height\n        //     this.zoomX, this.zoomY, // zoom in and out on that part\n        //     this.enemyX, this.enemyY, // where to show up x-axis, y-axis \n        //     this.enemyWidth, this.enemyHeight); \n    }\n    // enemyCollision() {\n    // for (const col = 0; col < this.enemyColumns; col++) {\n    //     for (const row = 0; row < this.enemyRows; row++) {\n    //         const enemy = this.enemies[col][row];\n    //         if (enemy.status == 1) {\n    //             if (x > enemy.x && y > enemy.y && x < (enemy.x + enemyWidth) && y < enemy.y + enemyHeight) {\n    //                 // dy = -dy;\n    //                 enemy.status = 0;\n    //             }\n    //         }\n    //     }\n    // }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);\n\n\n\n\n\n\n//# sourceURL=webpack:///./lib/enemy.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./lib/player.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ \"./lib/enemy.js\");\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubble */ \"./lib/bubble.js\");\n/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image_loader */ \"./lib/image_loader.js\");\n\n\n\n\n\nclass Game {\n    constructor(canvas, ctx){\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas, this.ctx);\n        this.enemies = [new _enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.canvas, this.ctx, this.player.playerX, this.player.playerY)];\n        this.score = 0;\n        this.alive = true;\n        this.draw = this.draw.bind(this);\n        this.addEnemies = this.addEnemies.bind(this);\n        Object(_image_loader__WEBPACK_IMPORTED_MODULE_3__[\"loadImage\"])(\"./lib/images/bbSprite.png\").then(image => {\n            this.sprite = image;\n            // this.draw();\n        }).then(() => (Object(_image_loader__WEBPACK_IMPORTED_MODULE_3__[\"loadImage\"])(\"./lib/images/bbSpriteLeft.png\")))\n        .then((image) => {\n            this.leftSprite = image;\n            // this.draw();\n        }).then(() => (Object(_image_loader__WEBPACK_IMPORTED_MODULE_3__[\"loadImage\"])(\"./lib/images/enemies/enemy1/enemy1Right.png\")))\n        .then(image => {\n            this.enemySpriteRight = image;\n            // this.draw();\n        }).then(() => (Object(_image_loader__WEBPACK_IMPORTED_MODULE_3__[\"loadImage\"])(\"./lib/images/enemies/enemy1/enemy1Left.png\")))\n            .then((image) => {\n                this.enemySpriteLeft = image;\n                this.draw();\n            }); \n    }\n\n    // drawLives() {\n    //     this.ctx.font = \"18px Calibri\";\n    //     this.ctx.fillStyle = \"#0079FF\";\n    //     this.ctx.fillText(\"Lives: \" + this.lives, this.canvas.width - 65, 20);\n    // }\n\n    drawScore() {\n        this.ctx.font = \"18px Calibri\";\n        this.ctx.fillStyle = \"#0079FF\";\n        this.ctx.fillText(\"Score: \" + this.score, 10, 25);\n    }\n\n    addEnemies() {\n        this.enemies.push(new _enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.canvas, this.ctx, this.player.playerX, this.player.playerY));\n    }\n\n    draw() {\n      \n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        \n        this.enemies.forEach((el) => {\n            el.enemySprite = this.enemySpriteRight; \n            if (this.player.playerX > el.enemyX){\n                el.enemySprite = this.enemySpriteRight;\n                el.enemyX += 2; \n            } else if (this.player.playerX < el.enemyX) {\n                el.enemySprite = this.enemySpriteLeft;\n                el.enemyX -= 2;\n            } \n            if (this.player.playerX <= el.enemyX + 10 && this.player.playerX >= el.enemyX - 10 && this.player.playerY >= el.enemyY - 5){\n                // el.enemySprite = this.enemySpriteRight;\n                this.alive = false;\n            }\n            // if (this.player.playerX == el.enemyX && this.player.playerY >= el.enemyY - 5){\n            //     // el.enemySprite = this.enemySpriteRight;\n            //     this.alive = false;\n            // }\n\n\n            this.ctx.drawImage(el.enemySprite,\n                el.partX, el.partY, // part of image to take -- width, height\n                el.zoomX, el.zoomY, // zoom in and out on that part\n                el.enemyX, el.enemyY, // where to show up x-axis, y-axis \n                el.enemyWidth, el.enemyHeight);\n\n            el.draw();      \n        });\n\n\n        if (!this.alive) {\n            alert(\"GAME OVER\");\n            document.location.reload(true);\n        }\n      \n        this.player.bubbles.forEach((bubbleEl) =>  {\n            this.enemies.forEach((enemyEl) => {\n                if (bubbleEl.bubbleX >= enemyEl.enemyX && bubbleEl.bubbleY >= enemyEl.enemyY){\n                    this.player.bubbles.splice(bubbleEl, 1);\n                    this.enemies.splice(enemyEl, 1);\n                    this.score += 1;\n                    this.addEnemies();\n                    setTimeout(this.addEnemies, 1000); \n                }\n            });\n        });\n\n        if (this.player.lastPressed == \"right\"){\n        this.ctx.drawImage(this.sprite,\n            this.player.partX, this.player.partY, // part of image to take -- width, height\n            this.player.zoomX, this.player.zoomY, // zoom in and out on that part\n            this.player.playerX, this.player.playerY, // where to show up x-axis, y-axis \n            this.player.playerWidth, this.player.playerHeight); // width, height of sprite\n        } else {\n            this.ctx.drawImage(this.leftSprite,\n                this.player.partX, this.player.partY, // part of image to take -- width, height\n                this.player.zoomX, this.player.zoomY, // zoom in and out on that part\n                this.player.playerX, this.player.playerY, // where to show up x-axis, y-axis \n                this.player.playerWidth, this.player.playerHeight); // width, height of sprite \n        }\n\n      \n        this.drawScore();\n        this.player.draw(); \n      \n        requestAnimationFrame(this.draw);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n    // if (x + dx < this.bubbleRadius || x + dx > canvas.width - this.bubbleRadius) {\n    //     dx = -dx;\n    // }\n\n    // if (y + dy < this.bubbleRadius) {\n    //     dy = -dy;\n    // } else if (y + dy > canvas.height - this.bubbleRadius) {\n    //     if (x > playerX && x < playerX + playerWidth) {\n    //         dy = -dy;\n    //     }\n    //     else {\n    //        lives--;\n    //         if (!lives) {\n    //             alert(\"GAME OVER\");\n    //             document.location.reload();\n    //             // clearInterval(interval); // Needed for Chrome to end game\n    //         }\n    //         else {\n    //             x = canvas.width / 2;\n    //             y = canvas.height - 30;\n    //             dx = 1;\n    //             dy = -1;\n    //             playerX = (canvas.width - playerWidth) / 2;\n    //         };\n    //     }\n    // }\n\n\n            // if (this.player.rightPressed && this.player.playerX < this.player.canvas.width - this.player.playerWidth + 10) {\n        //     this.player.playerX += 6;\n        // }\n        // else if (this.player.leftPressed && this.player.playerX > 0) {\n        //     this.player.playerX -= 6;\n        // }\n        // else if (this.player.upPressed && this.player.playerY > 0) {\n        //     // this.player.playerY -= 6;\n        //     this.player.jump();\n\n        // }\n        // else if (this.player.downPressed && this.player.playerY < (this.player.canvas.height - this.player.playerHeight)) {\n        //     // this.player.playerY += 6;\n        //     this.player.fall();\n        // }\n        // else if (this.player.spacePressed) {\n        //     this.bubble.draw();\n        // }\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/image_loader.js":
/*!*****************************!*\
  !*** ./lib/image_loader.js ***!
  \*****************************/
/*! exports provided: loadImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImage\", function() { return loadImage; });\n// export function loadImage(url) {\n//     return new Promise(resolve => { // 'resolve' is what you pass into '.then'\n\n//         const image = new Image();\n\n//         image.addEventListener(\"load\", () => {\n//             resolve(image);\n//         });\n\n//         return image.src = url;\n\n//     });\n// }\n\nfunction loadImage(url) {\n    return new Promise(resolve => { \n        const image = new Image(); \n        image.onload = (() => {\n        resolve(image);\n        }); \n        image.src = url;\n    });\n}\n\n//# sourceURL=webpack:///./lib/image_loader.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./lib/game.js\");\n\n\nconst canvas = document.getElementById(\"bbCanvas\");\nconst ctx = canvas.getContext(\"2d\");\n\nconst game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx);\n// game.draw();\n\n// NEON COLORS:\n\n// Name: Vivid Violet\n// Hex: #A800FF\n// RGB: (168, 0, 255)\n// CMYK: 0.341, 1, 0, 0\n\n// Name: Azure\n// Hex: #0079FF\n// RGB: (0, 121, 255)\n// CMYK: 1, 0.525, 0, 0\n\n// Name: Electric Green\n// Hex: #00F11D\n// RGB: (0, 241, 29)\n// CMYK: 1, 0, 0.879, 0.054\n\n// Name: Canary Yellow\n// Hex: #FFEF00\n// RGB: (255, 239, 0)\n// CMYK: 0, 0.062, 1, 0\n\n// Name: Orange(Color Wheel)\n// Hex: #FF7F00\n// RGB: (255, 127, 0)\n// CMYK: 0, 0.501, 1, 0\n\n// Name: Candy Apple Red\n// Hex: #FF0900\n// RGB: (255, 9, 0)\n// CMYK: 0, 0.964, 1, 0\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ }),

/***/ "./lib/player.js":
/*!***********************!*\
  !*** ./lib/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ \"./lib/bubble.js\");\n/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image_loader */ \"./lib/image_loader.js\");\n\n\nclass Player {\n    constructor(canvas, ctx){\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.partX = 0;\n        this.partY = 0;\n        this.zoomX = 170;\n        this.zoomY = 170;\n        this.playerWidth = 47;\n        this.playerHeight = 40;\n        this.playerX = 0;\n        this.playerY = (this.canvas.height - this.playerHeight);\n        this.DY = 3;\n        this.grounded = undefined;\n        this.lastPressed = \"right\";\n        this.rightPressed = false;\n        this.leftPressed = false;\n        this.upPressed = false;\n        \n        this.downPressed = false;\n        this.spacePressed = false;\n        this.keyDownHandler = this.keyDownHandler.bind(this);\n        this.keyUpHandler = this.keyUpHandler.bind(this);\n        this.shootBubbles = this.shootBubbles.bind(this); \n        this.bubbles = [];\n        document.addEventListener(\"keydown\", this.keyDownHandler, false);\n        document.addEventListener(\"keyup\", this.keyUpHandler, false);\n    \n    }\n\n    shootBubbles() { \n        this.bubbles.push(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas, this.ctx, this.playerX, this.playerY));\n    } \n\n    draw() {\n        this.bubbles.forEach((el) => {\n            el.draw();\n\n            if (el.bubbleX > el.bubbleRadius  &&  el.bubbleX < (el.canvas.width - 15) \n                && el.bubbleX < (el.playerX + 130) && el.bubbleX > (el.playerX - 130)) {\n                el.bubbleY += 0.7;\n                if (this.lastPressed == \"right\") {\n                    el.bubbleX += 10;\n                }\n                else {\n                    el.bubbleX -= 10;\n                }\n            }\n            if (el.bubbleY < 150){\n                this.bubbles.splice(el, 1);\n            }\n            el.bubbleY += el.dy;\n        });\n       \n        this.bubbleY += this.dy;\n\n        if (this.playerY >= (this.canvas.height - this.playerHeight)) {\n            this.grounded = true;\n        } else this.grounded = false;\n\n        if (this.rightPressed && this.playerX < this.canvas.width - this.playerWidth + 10) {\n            this.playerX += 4.5;\n            this.lastPressed = \"right\";\n        }\n        if (this.leftPressed && this.playerX > 0) {\n            this.playerX -= 4.5;\n            this.lastPressed = \"left\";\n        }\n        // else if (this.upPressed && this.playerY > 0 && \n        //     this.playerY > (this.canvas.height - this.playerHeight - 86)) {  \n        //     this.playerY -=  15;\n        // }\n        if (this.upPressed && this.playerY > 0 && this.grounded) {\n            while (this.playerY > (this.canvas.height - this.playerHeight - 86)) {\n                this.playerY -= 15;\n            }\n        }\n        // else if (this.downPressed && this.playerY < (this.canvas.height - this.playerHeight)) { \n        // }\n        if (this.spacePressed) {\n            setTimeout(this.shootBubbles, 100);\n        }\n\n        if (this.playerY < (this.canvas.height - this.playerHeight)) {\n            this.playerY += this.DY;\n        }\n\n        // if (this.lastPressed == \"right\") {\n        //     debugger\n        //     this.ctx.drawImage(this.sprite,\n        //         this.partX, this.partY, // part of image to take -- width, height\n        //         this.zoomX, this.zoomY, // zoom in and out on that part\n        //         this.playerX, this.playerY, // where to show up x-axis, y-axis \n        //         this.playerWidth, this.playerHeight); // width, height of sprite\n        // } else {\n        //     this.ctx.drawImage(this.leftSprite,\n        //         this.partX, this.partY, // part of image to take -- width, height\n        //         this.zoomX, this.zoomY, // zoom in and out on that part\n        //         this.playerX, this.playerY, // where to show up x-axis, y-axis \n        //         this.playerWidth, this.playerHeight); // width, height of sprite \n        // }\n    }\n\n    keyDownHandler(e) {\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            this.rightPressed = true;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            this.leftPressed = true;\n        }\n        else if (e.key == \"Up\" || e.key == \"ArrowUp\") {\n            this.upPressed = true;\n        }\n        else if (e.key == \"Down\" || e.key == \"ArrowDown\") {\n            this.downPressed = true;\n        }\n        else if (this.spacePressed == false && (e.which == \"32\" || e.code == \"Space\")) {\n            this.spacePressed = true;\n        }\n\n    }\n\n    keyUpHandler(e) {\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            this.rightPressed = false;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            this.leftPressed = false;\n        }\n        else if (e.key == \"Up\" || e.key == \"ArrowUp\") {\n            this.upPressed = false;\n        }\n        else if (e.key == \"Down\" || e.key == \"ArrowDown\") {\n            this.downPressed = false;\n        }\n        else if (e.which == \"32\" || e.code == \"Space\") {\n            this.spacePressed = false;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./lib/player.js?");

/***/ })

/******/ });