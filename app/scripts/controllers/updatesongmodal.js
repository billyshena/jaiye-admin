'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:UpdatesongmodalCtrl
 * @description
 * # UpdatesongmodalCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('UpdateSongModalCtrl', function ($scope, song, CategoryService, _, SongService, Logger, $modalInstance) {


      $scope.song = angular.copy(song);
      $scope.selection = {};
      $scope.categories = [];


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


      $scope.update = function() {

        // Set update parameters before sending the request
        var param = $scope.song;
        delete param.category;
        param.category = $scope.selection.id;
        delete param.owner;
        param.validated = $scope.selectedBox || false;

        console.log('before update', param);
        // Call the API
        SongService.update(param).then(function(result) {
          Logger.logSuccess('Modifications enregistrées !');
          result.owner = song.owner;
          result.category = $scope.selection;
          $modalInstance.close(result);
        }, function(err) {
          console.log('err', err);
          Logger.logError('Erreur lors de la modification');
        });
      };


      $scope.cancel = function() {
        $modalInstance.dismiss();
      };

      loadCategories();


  });
