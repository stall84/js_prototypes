
//************ EXTENDING OBJECTS(CLASSES - CONSTRUCTOR FUNCTIONS) *****************//

// TO Extend objects, take the verbose prototype resetting/assignment and put them in a reusable function

// Create a function to do the work of the above two lines of prototype resetting

function extend (Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('Duplicate Method')
}

function Circle(radius, color) {
    Shape.call(this, color);  // This is how you call the SUPER constructor (from Shape in this case)
    this.radius = radius;

    }
    
    Circle.prototype = Object.create(Shape.prototype);
    Circle.prototype.constructor = Circle;

    Circle.prototype.draw = function() {
        console.log('Drawing Circle of Radius: ' + this.radius)
    }

// As a best practice, whenever you reset the prototype of an object, you also need to specify it's
// constructor as we did on line 18    

function Square(size) {
    this.size = size;
}

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;



function Rectangle(length, width) {
    this.length = length;
    this.width = width;

}

extend(Rectangle, Shape)

const s = new Shape();
const c = new Circle(3, 'red');
const sq = new Square(15);
const rect = new Rectangle(20);