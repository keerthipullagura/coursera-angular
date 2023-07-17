(function() {
    'use strict';

    angular.module('MenuApp')
        .component('categoryItems', {
            templateUrl: 'src/restaurant/categoryitems.template.html',
            bindings: {
                items: '<'
            }
        });
})();