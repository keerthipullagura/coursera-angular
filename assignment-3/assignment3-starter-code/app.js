(function() {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json");

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'ndc',
            bindToController: true
        };
        return ddo;
    }


    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var ndc = this;
        ndc.getMenuItems = function(searchTerm) {
            MenuSearchService.getMatchedMenuItems(searchTerm);
        }
        ndc.items = MenuSearchService.getItems();
        ndc.onRemove = function(itemIndex) {
            MenuSearchService.removeItem(itemIndex);
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath']

    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        var items = [];
        service.getMatchedMenuItems = function(searchTerm) {
            var promise = $http({
                method: 'GET',
                url: (ApiBasePath)
            });
            promise.then(function(response) {
                var menus = response.data;
                console.log(menus);
                for (var menu in menus) {
                    var m_items = menus[menu].menu_items;
                    for (var index = 0; index < m_items.length; index++) {
                        if (m_items[index].description.includes(searchTerm)) {
                            items.push(m_items[index]);
                        }
                    }
                }
                console.log(items.length);
            }).catch(function(error) {
                console.log("Something went wrong.");
            });
            return items;
        }

        service.getItems = function() {
            return items;
        }

        service.removeItem = function(itemIndex) {
            items.splice(itemIndex, 1);
        }
    }

})();