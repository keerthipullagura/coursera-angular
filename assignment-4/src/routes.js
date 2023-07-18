(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // redirect to home page if no other url matches
        $urlRouterProvider.otherwise('/');

        // *** set up ui states ***
        $stateProvider

        // Home page
            .state('home', {
            url: '/',
            templateUrl: 'src/restaurant/template/home.template.html'
        })

        // Categories page
        .state('categories', {
            url: '/categories',
            templateUrl: 'src/restaurant/template/categories.template.html',
            controller: 'CategoriesController as catCtrl',
            resolve: {
                categories: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        .state('catDetail', {
            url: '/cat-detail/{categoryShortName}',
            templateUrl: 'src/restaurant/template/items.template.html',
            controller: 'ItemsController as itemCtrl',
            resolve: {
                items: ['$stateParams', 'MenuDataService',
                    function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }
                ]
            }
        });
    }

})();