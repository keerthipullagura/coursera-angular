(function() {
    'use strict';

    angular.module('MenuApp')
        .component('menuCategories', {
            templateUrl: 'src/restaurant/template/menucategories.template.html',
            bindings: {
                categories: '<'
            }
        });
})();