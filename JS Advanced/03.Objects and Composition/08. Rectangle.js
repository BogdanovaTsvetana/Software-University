function rectangle1(width, height, color) {
    width = Number(width);
    height = Number(height);
    let firstLetter = color[0].toUpperCase();
    color = firstLetter + color.substring(1);

    let obj = {
        width,
        height,
        color
    };
    obj.calcArea = function () {
        return obj.width * obj.height;
    }

    return obj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());