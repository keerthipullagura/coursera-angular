(function() {

    'use strict';

    angular.module('public').controller('InfoController', InfoController);
    InfoController.$inject = ['MenuService', 'ApiPath'];

    function InfoController(MenuService, ApiPath) {

        var info = this;
        info.ApiPath = ApiPath;

        info.userExists = false;

        info.userInfo = MenuService.getUserInfo();


        if (angular.equals(info.userInfo.firstName, undefined)) {
            info.userExists = false;
        } else {
            info.match = info.userInfo.favDish.match(/\d+/);
            info.firstOccurDigit = parseInt(info.match[0], 10);
            info.indexOfFirstDigit = info.userInfo.favDish.indexOf(info.firstOccurDigit);
            info.shortname_without_no = info.userInfo.favDish.substring(0, info.indexOfFirstDigit);
            info.menu_no = info.userInfo.favDish.substring(info.indexOfFirstDigit);
            info.imgpath = info.shortname_without_no + "/" + info.shortname_without_no + info.menu_no + ".jpg";
            info.userExists = true;
        }
    }
})();