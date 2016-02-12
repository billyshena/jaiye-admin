'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('UserCtrl', function ($scope, UserService, $modal) {

      $scope.users = [];

      function loadUsers() {
        UserService.find().then(function(data) {
          $scope.users = data;
          console.log('data', data);
        }, function(err) {
          console.log('err', err);
        });
      }


      $scope.add = function() {

        var modalInstance = $modal.open({
          templateUrl: '/views/addusermodal.html',
          controller: 'AddUserModalCtrl'
        });

        modalInstance.result.then(function(data) {
          $scope.users.push(data);
        });

      };

      $scope.update = function(user) {


        var modalInstance = $modal.open({
          templateUrl: '/views/updateusermodal.html',
          controller: 'UpdateUserModalCtrl',
          resolve: {
            user: function() {
              return user;
            }
          }
        });

        modalInstance.result.then(function(data) {
          _.each($scope.users, function(value, index) {
            if(value && value.id === data.id) {
              $scope.users.splice(index, 1);
            }
          });
          $scope.users.push(data);
        });

      };

      loadUsers();
  });
