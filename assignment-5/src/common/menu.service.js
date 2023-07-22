(function() {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);


    MenuService.$inject = ['$http', 'ApiPath'];

    function MenuService($http, ApiPath) {

        var service = this;
        /*userPreferences = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNo: '',
            favDish: '',
            signedUp: false
        }*/
        service.getCategories = function() {
            return $http.get(ApiPath + '/categories.json').then(function(response) {
                return response.data;
            });
        };


        service.getMenuItems = function(category) {
            return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function(response) {
                return response.data;
            });
        }

        service.saveUserPreferences = function(firstName,
            lastName,
            email,
            phone,
            favDish
            /*price_large,
            description,
            short_name,
            name*/
        ) {
            service.firstName = firstName;
            service.lastName = lastName;
            service.email = email;
            service.phone = phone;
            service.favDish = favDish;

            /*service.price_large = price_large;
            service.description = description;
            service.short_name = short_name;
            service.name = name;*/
        }

        service.getUserInfo = function() {
            return service;
        }
        service.getFavoriteDish = function(menu_number) {
            service.match = menu_number.match(/\d+/);
            service.startIndex = parseInt(service.match[0], 10);
            service.short_name = menu_number.substring(0, service.startIndex);
            service.menu_no = menu_number.substring(service.startIndex) - 1;
            /*coursera - jhu -
                default -rtdb.firebaseio.com / menu_items / L / menu_items / 0. json*/
            return $http.get(ApiPath + '/menu_items/' + service.short_name + '/menu_items/' + service.menu_no + '.json');
        }

        service.saveFavDish = function(price_large, description, short_name, name) {
            service.price_large = price_large;
            service.description = description;
            service.short_name = short_name;
            service.name = name;
        }
    }
})();