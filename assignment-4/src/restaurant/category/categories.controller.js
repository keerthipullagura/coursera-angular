(function() {
    'use strict';

    angular.module('MenuApp').controller('CategoriesController', CategoriesController);

    //CategoriesController.$inject = ['MenuDataService', 'categories'];
    CategoriesController.$inject = ['categories'];

    //function CategoriesController(MenuDataService, categories) {
    function CategoriesController(categories) {
        var catCtrl = this;
        catCtrl.categories = categories;
    }
})();