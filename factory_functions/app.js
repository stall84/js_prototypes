const log = console.log;



function circleMaker(radius) {
    // Factory Functions are 'defined' by their use of a return 
    //statement to return an object out of the function

    // Moreover a factory function will return the object directly, literally from the return 
    return {
        radius: radius,
        draw: function() {
            log(`Drawing a circle of radius ${radius}`);
        }
    }
}


function squareMaker(side) {
    return { 
        side: side,
        area: function () {
           log('Area of Square: ', side * side);
        }
    } 
}
