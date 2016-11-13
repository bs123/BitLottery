(function () {
    'use strict';

    angular
        .module('bitLotteryCleanApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
