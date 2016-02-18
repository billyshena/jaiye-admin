'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:AddawardmodalCtrl
 * @description
 * # AddawardmodalCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('AddAwardModalCtrl', function ($scope, CategoryService, Logger, AwardService, $modalInstance) {

      $scope.award = {};
      $scope.selection = {};

      function loadCategories() {
        CategoryService.find().then(function(data) {
          $scope.categories = data;
        }, function(err) {
          Logger.logError('Impossible de charger les catégories');
          console.log('err', err);
        });
      }


      loadCategories();


      $scope.add = function() {

        console.log('award', $scope.award, 'selection', $scope.selection);

        $scope.award.category = $scope.selection.id;

        AwardService.create($scope.award).then(function(data) {
          $modalInstance.close(data);
        }, function(err) {
          console.log('err', err);
          Logger.logError('Erreur lors de la création');
        });

      }


  });
