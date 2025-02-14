// Create a Vehicle constructor function that takes brand and year as parameters. Then, add a method getAge() using prototype that calculates the age of the vehicle based on the current year.

function Vehicle(brand, year) {
    this.brand = brand;
    this.year = year;

}
Vehicle.prototype.getAge = function() {
    return new Date().getFullYear() - this.year;

};


const car = new Vehicle("Toyota", 2020);
console.log(car.getAge());
