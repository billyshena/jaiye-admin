'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:AddusermodalCtrl
 * @description
 * # AddusermodalCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('AddUserModalCtrl', function ($scope, UserService, Logger, $modalInstance) {

      $scope.user = {};

      $scope.add = function() {

        UserService.create($scope.user).then(function(data) {
          Logger.logSuccess('Utilisateur crée !');
          $modalInstance.close(data);
        }, function(err) {
          console.log('err', err);
          Logger.logError('Erreur lors de la création');
        });

      }


  });
