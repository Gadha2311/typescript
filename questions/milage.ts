class Car {
  name: string;
  mileage: number;
  max_speed: number;

  constructor(name: string, mileage: number, max_speed: number) {
    this.name = name;
    this.mileage = mileage;
    this.max_speed = max_speed;
  }
}

const myCar = new Car("Toyota Camry", 50000, 180);
console.log(myCar);
