export function loadImage(url) {
    return new Promise(resolve => { // 'resolve' is what you pass into '.then'

        const image = new Image();

        image.addEventListener("load", () => {
            resolve(image);
        });

        return image.src = url;

    });
}
