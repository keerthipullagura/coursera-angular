(function() {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json");

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var ndc = this;
        ndc.getMenuItems = function(searchTerm) {
            ndc.foundItems = MenuSearchService.getMatchedMenuItems(searchTerm);
        }
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath']

    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        var foundItems = [];
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
                            foundItems.push(m_items[index]);
                        }
                    }
                }
                console.log(foundItems.length);
            }).catch(function(error) {
                console.log("Something went wrong.");
            });
            return foundItems;
        }

        service.getFoundItems = function() {
            return foundItems;
        }
    }

})();