(function() {
    'use strict';

    angular.module('public').controller('SignupController', SignupController);

    SignupController.$inject = ['$scope', 'MenuService'];

    function SignupController($scope, MenuService) {
        var su = this;

        su.favDishDetails = {
            description: '',
            name: '',
            price_large: '',
            short_name: ''
        }
        $scope.userPreferences = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            favDish: '',
        }

        su.showError = false;
        su.showMessage = false;


        $scope.setPreference = function(form) {
            su.showError = false;
            su.showMessage = false;
            // If the form is not valid don't submit
            if (form.$invalid) {
                su.showError = true;
                return;
            } else {
                su.showMessage = true;
            }

            /*MenuService.getFavoriteDish($scope.userPreferences.favDish).then(function(response) {
                su.favDishDetails = response.data;
                su.showMessage = true;
            }, function(error) {
                su.showError = true;
            });
            su.signedUp = true;
            su.price_large = su.favDishDetails.price_large;
            su.description = su.favDishDetails.description;
            su.short_name = su.favDishDetails.short_name;
            su.name = su.favDishDetails.name;*/
            MenuService.saveUserPreferences($scope.userPreferences.firstName,
                $scope.userPreferences.lastName,
                $scope.userPreferences.email,
                $scope.userPreferences.phone,
                $scope.userPreferences.favDish);
            /*su.price_large, su.description, su.short_name, su.name);*/

            MenuService.getFavoriteDish($scope.userPreferences.favDish).then(function(response) {
                su.favDishDetails = response.data;
                su.price_large = su.favDishDetails.price_large;
                su.description = su.favDishDetails.description;
                su.short_name = su.favDishDetails.short_name;
                su.name = su.favDishDetails.name;
                MenuService.saveFavDish(su.price_large, su.description, su.short_name, su.name);
            }, function(error) {
                su.showError = true;
            });
        }


    };

})();