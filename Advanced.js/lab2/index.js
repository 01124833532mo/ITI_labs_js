// Part One: 


function Car(name, speed) {
    this.name = name
    this.speed = speed
}
Car.prototype.accelerate = function() {
    this.speed += 10
    console.log(`The new speed of ${this.name} is ${this.speed} km/h`)
}
Car.prototype.brake = function() {
    this.speed -= 5
    console.log(`The new speed of ${this.name} is ${this.speed} km/h`)
}
let car1 = new Car('bmw', 120)
let car2 = new Car('bmw', 95)




car1.accelerate()
car1.brake()
car2.accelerate()
car2.brake()
// hasownproperty
console.log(Object.hasOwn(car1, 'name'))        
console.log(Object.hasOwn(car1, 'speed'))      

console.log(Object.hasOwn(car1, 'accelerate'))  
console.log(Object.hasOwn(car1, 'brake'))      
// is property   check if we euality of two values
console.log(Object.is(car1.name, car2.name))

console.log("***************************")
console.log(Object.is(car1.name,car2.name))

// isExtensible // to check if we can add new properties to an object
console.log(Object.isExtensible(car1)) 

// isFrozen // to check if an object is frozen
console.log(Object.isFrozen(car1))
//preventExtensions // to prevent adding new properties to an object
Object.preventExtensions(car1)
car1.color = 'red' 
console.log(car1.color)
car1.name = 'audi'
console.log(car1.name)

// part two

function EV(name, speed, charge) {
    Car.call(this, name, speed)
    this.charge = charge
}
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo
}
EV.prototype.accelerate = function() {
    this.speed += 20
    this.charge -= 1
    console.log( `${this.name} going at ${this.speed} km/h, with a charge of ${this.charge}`)
}

let ev1 = new EV('Tesla', 120, 23)
ev1.chargeBattery(90)
ev1.accelerate()
ev1.brake()
ev1.accelerate()
console.log(ev1)




