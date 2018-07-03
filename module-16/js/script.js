const Shape = class Shape {
  constructor(color = 0, initX = 0, initY = 0) {
    this.color = color;
    this.initX = initX;
    this.initY = initY;
  }

  getColor() {
    return this.color;
  }

  setColor(value) {
    this.color = value;
  }

  getCoords() {
    return [this.initX, this.initY];
  }

  moveTo(newX, newY) {
    this.initX = newX;
    this.initY = newY;
  }
}

const Rectangle = class Rectangle extends Shape {
  constructor(color, initX, initY, initWidth, initHeight) {
    super(color, initX, initY);
    this.initWidth = initWidth;
    this.initHeight = initHeight;
  }

  setWidth(newWidth) {
    this.initWidth = newWidth;
  }

  setHeight(newHeight) {
    this.initHeight = newHeight;
  }

  getDims() {
    return [this.initWidth, this.initHeight];
  }

  draw() {
    console.log(`
Drawing a Rectangle at:
  (x: ${this.initX}, y: ${this.initX})
With dimentions:
  width: ${this.initWidth}
  height: ${this.initHeight}
Filled with color: ${this.color}
    `)
  }
}

class Circle extends Shape {
  constructor(color, initX, initY, initRadius) {
    super(color, initX, initY);
    this.initRadius = initRadius;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(value) {
    this.initRadius = value;
  }

  draw() {
    console.log(`
Drawing a Circle at:
  (x: ${this.initX}, y: ${this.initY})
With dimentions:
  radius: ${this.initRadius}
Filled with color: ${this.color}
    `)
  }
}

const newRectangle = new Rectangle();
newRectangle.setColor('#000');
newRectangle.moveTo(20, 40);
newRectangle.setWidth(20);
newRectangle.setHeight(20);
newRectangle.draw();

const newCircle = new Circle();
newCircle.setColor('#fff');
newCircle.moveTo(40, 40);
newCircle.setRadius(50);
newCircle.draw();
