

// Every object (except the root object) has a prototype (parent). 
// To get the prototype of an object:
let testObj = {};
Object.getPrototypeOf(testObj); 

// In Chrome, you can inspect "__proto__" property. But you should 
// not use that in the code. 


// Property Descriptors //
let person = {
    name: 'Mosh'
};
for (let key in person) {
console.log(person);
}

let objectBase = Object.getPrototypeOf(person);
// To get the attributes of a property:
Object.getOwnPropertyDescriptor(testObj, 'propertyName');
//EX: 
let personNew = {
    name: 'Michael',
    job: 'Badassery'
}

let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log("Descriptor: " + descriptor);

let testObj2 = {
    name: 'Carter'
}

// To set the attributes for a property:
Object.defineProperty(testObj2, 'propertyName', {
    configurable: false,    // cannot be deleted
    writable: false,
    enumerable: false
});


// In javascript, 

// Constructors have a "prototype" property. It returns the object 
// that will be used as the prototype for objects created by the constructor. 
Object.prototype === Object.getPrototypeOf({})
Array.prototype === Object.getPrototypeOf([])

// All objects created with the same constructor will have the same prototype. 
// A single instance of this prototype will be stored in the memory. 
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 

// Any changes to the prototype will be immediately visible to all objects 
// referencing this prototype. 

// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory.
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0};    // Private member (defined with let

    // this.getDefaultLocation = function () {     // Traditional way of Getting a member/prop/field
    //     return defaultLocation;
    // }
    this.draw = function () {
        console.log('Drawing Circle of Radius: ' + this.radius);
    }
    this.area = function () {
        console.log('Drawing Circle of Area: ' + (Math.PI * (this.radius * this.radius)));
    }
    // Assigning Getter/Setters: Use 'this' to indicate the new object being created (circle in our case)
    // Second argument is the name of the property in string form.
    // The third argument is an Object defining the key-value pair. in our case a getter.
    // So when we instantiate a new circle object, and call for circleObj.defaultlocation. The function we assigned below
    // is returned
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        }
    })
}


// Inheritance of Objects in Javascript. Your object inherits from the Base Object of it's type (like the Array base object)
// which in turn inherits from the root javascript object

let myArray = [10,200,9000];

// This is a prototype member.. It will be availalble outside of just an instance of the 'Constructor'
Circle.prototype.protoDraw = function() {
    console.log('Drawing Circle Proto: ')
}

Circle.prototype.toString = function () {
    console.log('Prototype toString method on Circle with radius: ' + this.radius);
}
// To get the own/instance properties:
//Object.keys(obj);

// To get all the properties (own + prototype): 
//for (let key in obj) {}