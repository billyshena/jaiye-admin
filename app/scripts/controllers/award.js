'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:AwardCtrl
 * @description
 * # AwardCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('AwardCtrl', function ($scope, $modal, AwardService) {

      $scope.awards = [];

      // Open up the AddModalCtrl handler
      $scope.add = function() {

        var modalInstance = $modal.open({
          templateUrl: '/views/addawardmodal.html',
          controller: 'AddAwardModalCtrl'
        });


        modalInstance.result.then(function(data) {
          if(!data) {
            return;
          }
          $scope.awards.push(data);
        });
      };



      function loadAwards() {

        AwardService.find({ populate: ['owner', 'category', 'song'] }).then(function(data) {
          $scope.awards = data;
        }, function(err) {
          console.log('err', err);
        });

      }


      loadAwards();

  });
