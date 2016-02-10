'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('LoginCtrl', function ($scope, $http, $state, Storage) {

      $scope.user = {};

      $scope.login = function() {

        $http
            .post(config.appUrl + '/auth/admin', $scope.user)
            .then(function(response) {
              console.log('response', response);
              var data = response.data;
              Storage.set('token', data.token);
              $state.go('song');

            }, function(err) {
              console.log('err', err);
            });

      };



  });
