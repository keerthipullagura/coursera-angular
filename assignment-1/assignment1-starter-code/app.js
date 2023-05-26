(function() {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.validateLunch = function() {
            var inputText = $scope.litems
            console.log(inputText);
            if (inputText == undefined) {
                $scope.message = "Please enter data first";
            } else {
                var items = inputText.split(',');
                if (items != undefined && items.length <= 3) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Check If Too Much";
                }
            }
        };
    }

})();