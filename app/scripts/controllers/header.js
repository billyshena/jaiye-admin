'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('HeaderCtrl', function ($scope, $state, Storage) {

      $scope.logout = function() {

        Storage.unset('token');
        $state.go('login');

      }
  });
