(function() {
    'use strict';

    angular.module('MenuApp')
        .component('menuCategories', {
            templateUrl: 'src/restaurant/menucategories.template.html',
            bindings: {
                categories: '<'
            }
        });
})();