import Game from "./game";

const canvas = document.getElementById("bbCanvas");
// debugger
const ctx = canvas.getContext("2d");

const game = new Game(canvas, ctx);
game.draw();