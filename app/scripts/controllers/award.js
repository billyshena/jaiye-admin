'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:AwardCtrl
 * @description
 * # AwardCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('AwardCtrl', function ($scope, $modal, AwardService, Logger) {

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


      $scope.delete = function(award) {

        AwardService.delete(award.id).then(function() {
          $scope.awards.splice($scope.awards.indexOf(award), 1);
          Logger.logSuccess('Cet award a bien été supprimé');
        }, function(err) {
          console.log('err', err);
          Logger.logError('Erreur lors de la suppression');
        });

      };


      loadAwards();

  });
