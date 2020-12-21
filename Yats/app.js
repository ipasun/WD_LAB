(function () {
    'use strict';

    angular.module('cars', [])
        .controller('carsController', CarsController)
        .service('carsService', CarsService);

    CarsController.$inject = ['carsService'];
    function CarsController(service) {
        const controller = this;
        controller.cars = service.getCars();

        controller.remove = carIndex => service.remove(carIndex);
        controller.hide = carIndex => service.hide(carIndex);
    }

    function CarsService() {
        const cars = [
            new Car('Запорожець', 100),
            new Car('Mustang', 1),
            new Car('Audi', 4),
            new Car('BMW', 10),
            new Car('Mercedes', 6)
        ];

        this.getCars = () => cars
        this.remove = carIndex => cars.splice(carIndex, 1)
        this.hide = carIndex => cars[carIndex].isHide = true
    }


    class Car {
        constructor(mark, quantity = 0) {
            this.mark = mark;
            this.quantity = quantity;
            this.isHide = false;
        };
    }

})();
