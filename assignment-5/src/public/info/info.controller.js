(function() {

    'use strict';

    angular.module('public').controller('InfoController', InfoController);
    InfoController.$inject = ['MenuService', 'ApiPath'];

    function InfoController(MenuService, ApiPath) {

        var info = this;
        info.ApiPath = ApiPath;

        info.userExists = false;

        info.userInfo = MenuService.getUserInfo();

        info.match = info.userInfo.favDish.match(/\d+/);
        info.startIndex = parseInt(info.match[0], 10);
        info.shortname_without_no = info.userInfo.favDish.substring(0, info.startIndex);
        info.menu_no = info.userInfo.favDish.substring(info.startIndex);
        info.imgpath = info.shortname_without_no + "/" + info.shortname_without_no + info.menu_no + ".jpg";
        if (angular.equals(info.userInfo, {})) {
            info.userExists = false;
        } else {
            info.userExists = true;
        }
    }
})();