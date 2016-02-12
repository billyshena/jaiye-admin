'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:UpdateusermodalCtrl
 * @description
 * # UpdateusermodalCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('UpdateUserModalCtrl', function ($scope, UserService, user, $modalInstance, Logger) {

      $scope.user = angular.copy(user);

      $scope.update = function() {

        UserService.update($scope.user).then(function(data) {
          Logger.logSuccess('Modifications enregistrées !');
          $modalInstance.close(data);
        }, function(err) {
          console.log('err', err);
          Logger.logError('Erreur modification');
        });

      }

      $scope.cancel = function() {
        $modalInstance.dismiss();
      }

  });
