'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:SongCtrl
 * @description
 * # SongCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('SongCtrl', function ($scope, SongService, Logger, $modal, $window) {

      $scope.song = {};
      $scope.songs = [];

      function loadSongs() {

          SongService.find().then(function(data) {
            $scope.songs = data;
          }, function(err) {
            Logger.logError('Impossible de charger les sons');
            console.log('err',err);
          });
      }


      $scope.add = function() {
        var modalInstance = $modal.open({
          templateUrl: '/views/addsongmodal.html',
          controller: 'AddSongModalCtrl'
        });

        modalInstance.result.then(function(data) {
          $scope.songs.push(data);
        });

      };


      $scope.update = function(song) {

        var modalInstance = $modal.open({
          templateUrl: '/views/updatesongmodal.html',
          controller: 'UpdateSongModalCtrl',
          resolve: {
            song: function() {
              return song;
            }
          }
        });

        modalInstance.result.then(function(result) {
          _.each($scope.songs, function(value, index) {
            if(value.id === result.id) {
              $scope.songs.splice(index, 1);
            }
          });
          $scope.songs.push(result);
        })

      };


      $scope.delete = function(song) {

        var confirm = $window.confirm("Êtes-vous sûr de vouloir supprimer ce son?");
        if(!confirm) {
          return;
        }
        SongService.delete(song.id).then(function(data) {
          $scope.songs.splice($scope.songs.indexOf(song), 1);
          Logger.logSuccess('Le son a bien été supprimé');
        });

      };

      loadSongs();

  });
