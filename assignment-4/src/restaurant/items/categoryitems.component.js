(function() {
    'use strict';

    angular.module('MenuApp')
        .component('categoryItems', {
            templateUrl: 'src/restaurant/template/categoryitems.template.html',
            bindings: {
                items: '<'
            }
        });
})();