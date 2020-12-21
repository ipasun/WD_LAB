(function () {
    'use strict';

    angular.module('lab_4', [])
        .controller('toBuyController', ToBuyController)
        .controller('boughtController', BoughtController)
        .service('itemsService', ItemsService);

    ToBuyController.$inject = ['itemsService'];
    function ToBuyController(service) {
        var controller = this;
        controller.toBuyItems = service.getToBuyItems();

        controller.addToBought = function (itemIndex) { 
            service.addBoughtItem(itemIndex);
        }
    };

    BoughtController.$inject = ['itemsService'];
    function BoughtController(service) {
        var controller = this;
        controller.boughtItems = service.getBoughtItems();
    };

    function ItemsService() {
        var service = this;

        var boughtItems = [];

        var toBuyItems = [
            new Item('apple', 3),
            new Item('egg', 8),
            new Item('tomato', 1),
            new Item('milk', 20),
            new Item('bread', 5)
        ];

        service.addBoughtItem = function (shopItemId) {
            boughtItems.push(toBuyItems[shopItemId]);
            toBuyItems.splice(shopItemId, 1);
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    };


    class Item {
        constructor(name, amount) {
            this.name = name;
            this.amount = amount;
        };
    };

})();
