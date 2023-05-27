(function() {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var tbc = this;
        tbc.markItemAsBought = function(itemIndex) {
            ShoppingListCheckOffService.markItemAsBought(itemIndex);
        }
        tbc.list = ShoppingListCheckOffService.getItemsToBuy();
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var abc = this;
        abc.list = ShoppingListCheckOffService.getItemsBought();

    }

    function ShoppingListCheckOffService() {
        var service = this;

        var items = [];
        items.push({
            name: "Chocolates",
            quantity: "10"
        });
        items.push({
            name: "Icecream",
            quantity: "20"
        });
        items.push({
            name: "Chips",
            quantity: "5"
        });
        items.push({
            name: "Soda",
            quantity: "3"
        });
        items.push({
            name: "Water",
            quantity: "10"
        });

        var boughtItems = [];
        service.markItemAsBought = function(itemIndex) {
            var item = items[itemIndex];
            boughtItems.push(item);
            items.splice(itemIndex, 1);
        }

        service.getItemsToBuy = function() {
            return items;
        }

        service.getItemsBought = function() {
            return boughtItems;
        }
    }

})();