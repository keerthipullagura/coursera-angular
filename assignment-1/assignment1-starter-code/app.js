(function() {
    'use strict';
    anugular.module('LunchCheck', [])
        .controller('LunchCheckController', 'LunchCheckController');

    LunchCheckController.$inject = [$scope];

    function LunchCheckController($scope) {
        $scope.validateLunch = function() {
            inputText = $scope.litems;
            console.log(inputText);
            $scope.errorMessage = "Enjoy!";
        }
    }

})();