// export default class Background {
//     constructor(image, width, height) {
//         this.image = image;
//         this.width = width;
//         this.height = height;
//         this.tiles = new Map(); // The Map object holds key-value pairs and keeps the original order of the keys
//     }
//    define(name, x, y){
//        const piece = document.createElement("canvas");
//        piece.getContext("2d");
//        piece.width = this.width;
//        piece.height = this.height;
//        piece.drawImage(this.image, (x * this.width), (y * this.height), 
//                         this.width, this.height,
//                         0, 0, this.width, this.height);
//        this.tiles.set(name, piece);
//    }
//     draw(name, context, x, y) {
//         const piece = this.tiles.get(name);
//         context.drawImage(piece, x, y);
//     }

//     drawTile(name, context, x, y) {
//         this.draw(name, context, x * this.width, y * this.height);
//     }
// }
