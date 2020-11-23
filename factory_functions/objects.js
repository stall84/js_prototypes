// The simplest way to create an object is using an object literal 
const circle = { 
   radius: 1, 
   draw: function() {}
}; 
   
// To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor. 

// FACTORY FUNCTION // 
function createCircle(radius) { 
   return {
      radius, 
      draw: function() {
         console.log('Drawing...', this.radius);
      }
   } 
} 

// To create an object from the factory function:
const circleNew = createCircle(3);
circleNew.draw();

// CONSTRUCTOR FUNCTION // 
function Circle(radius) { 
    this.radius = radius; 
    this.draw = function() {
       console.log('Constructor Function Drawing: ', this.radius);
    }
} 
const another1 = new Circle(6);  // The NEW operator has to be used to set the instances of 'this' to the new object. 
                                 // otherwise 'this' will point to the global/window objecy.
                                 // So NEW initializes a new empty object, points 'this' at that object and returns that object out of Constructor Func

another1.draw();                                 
// Basically Factory functions explicitly return an object. Constructor functions set 'this' properties

//********************/
// CONSTRUCTOR PROPERTY //
// Every object has a "constructor" property which returns the function that was used to construct or create that object. 

const x = {};
x.constructor; // returns Object() 
   
// In JavaScript, functions are objects. They have properties and methods. 
Circle.name; 
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function 
Circle.apply({}, [1]);

// Under the hood, Javascript creates/parses your function (e.g. function newCircle (radius) {this.radius; this.draw = function() {console.log}}like so
// In this way you can plainly see that Functions are really just objects (new keyword creates new object to hold the properties)
const NewCircle = new Function('radius', `
this.radius = radius; 
this.draw = function() {
   console.log('Constructor Function Drawing: ', this.radius);
}
`);

const newCircle = new NewCircle(117);

// Value types are copied by their value, reference types are copied by their reference. 
// NOTE: Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array 
   
// JavaScript objects are dynamic. You can add/remove properties: 
circle.location = {};
circle['location'] = {};
                      
delete circle.location; 
                      
// To enumerate the members in an object: 
for (let key in newCircle) console.log(key, newCircle[key]);

Object.keys(circle); 
                      
// To see if an object has a given property
if ('location' in circle)
                      
// Abstraction means hiding the complexity/details and showing only the essentials. 
// We can hide the details by using private members. Replace "this" with "let". 

// function CirclePrivate(radius) { 
//    // Public member 
//    this.radius = radius; 

//    // Private member                       
//    let defaultLocation = { x: 0, y: 0 };     
   
//    let computeOptimumLocation = function() {
//       console.log('Computing...')
//    }

//    this.draw = function () {
//       console.log(defaultLocation);
//       computeOptimumLocation();
//    }

// }                       

// const nebler = new CirclePrivate();
// nebler.draw();

// A GETTER is a function that is used to read a property
// To define a getter/setter, use Object.defineProperty():

function Squarer(length) {
   this.length = length;

   let defaultLocation = { x: 10, y: 10 };

   this.draw = function () {
      console.log('Drawing Square of length: ', this.length);
   }
}

Object.defineProperty(this, 'defaultLocation', {
    get: function() { return defaultLocation; },
    set: function(value) { defaultLocation = value; }
});

let square = new Squarer(3);

function Snope(bert) {
   this.name = bert;
}

let flert = new Snope('Johnson');