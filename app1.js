const log = console.log;



function Circle (radius) {
    // Object Instance Members/Methods (Just members in this case)
    this.radius = radius;
    this.diameter = (2 * radius);
    this.circumference = (2 * Math.PI * this.radius);
    this.area = (Math.PI * (this.radius * this.radius));
}

    //Prototype Members/Methods (All methods in this case)
Circle.prototype.draw = function() { log(`Drawing a ${this.radius}-radius circle...`) };
Circle.prototype.logArea = function() { log(`Area of this ${this.radius}-radius circle is: ${this.area}`)};
Circle.prototype.logCircum = function() { log(`Circumference of this ${this.radius}-radius circle is: ${this.circumference}`)}
Circle.prototype.toString = function()   { return`Circle with dimensions: ${this.radius}-radius -- ${this.diameter}-diameter -- ${this.circumference.toFixed(2)}-circumference & ${this.area.toFixed(2)}-area` }; 

const c1 = new Circle(8);
const c2 = new Circle(10);
const c3 = new Circle(12);
const c4 = new Circle(14);
