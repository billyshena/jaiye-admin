'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:AddsongmodalCtrl
 * @description
 * # AddsongmodalCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('AddSongModalCtrl', function ($scope, $modalInstance, SongService, Logger, CategoryService) {

      $scope.song = {};
      $scope.categories = [];
      $scope.selection = {};

      $scope.add = function() {

        var param = $scope.song;
        delete param.category;
        param.category = $scope.selection.id;

        console.log('param', param);

        SongService.create(param).then(function(data) {

          data.category = $scope.selection;
          Logger.logSuccess('Le son a bien été crée !');
          $modalInstance.close(data);
        }, function(err) {
          console.log('err', err);
          Logger.logError('Erreur lors de la création du son');
        });

      };

      function loadCategories() {

        CategoryService.find().then(function(data) {
          _.each(data, function(category) {
            if($scope.song.category && category.id == $scope.song.category.id) {
              $scope.selection = category;
            }
            $scope.categories.push(category);
          });
        });

      }

      $scope.cancel = function() {
        $modalInstance.dismiss();
      };

      loadCategories();

    });
