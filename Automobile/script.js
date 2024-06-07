class Car {
    constructor(brand, model, yearOfManufacture = null, seats = 5) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.seats = seats;
    }

    getDescription() {
        let description = this.brand + " " + this.model + ", " + this.yearOfManufacture + "\n" + "Seats: " + this.seats;
        return description;
    }
}

class ElectricCar {
    constructor(brand, model, yearOfManufacture = null, seats = 5, batteryRange = 0) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.seats = seats;
        this.batteryRange = batteryRange;
    }
    getDescription() {
        let description = this.brand + " " + this.model + ", " + this.yearOfManufacture + "\n" + "Seats: " + this.seats + "\n"+ "Battery range: " + this.batteryRange + " km";
        return description;
    }
}

const auto1 = new Car("Ford", "Model T", 1925);

// Instanciar auto2 usando ElectricCar en lugar de Car
const auto2 = new ElectricCar("Nissan", "Leaf", 2019, 5, 270);

const carDescriptionDiv1 = document.getElementById('carDescription1');
const carDescriptionDiv2 = document.getElementById('carDescription2');

carDescriptionDiv1.innerText = auto1.getDescription();
carDescriptionDiv2.innerText = auto2.getDescription();