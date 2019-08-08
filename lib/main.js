import Game from "./game";

const canvas = document.getElementById("bbCanvas");
const ctx = canvas.getContext("2d");

const game = new Game(canvas, ctx);
