var Car = /** @class */ (function () {
    function Car(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
    return Car;
}());
var myCar = new Car("Toyota Camry", 50000, 180);
console.log(myCar);
