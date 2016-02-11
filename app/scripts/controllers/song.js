'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:SongCtrl
 * @description
 * # SongCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('SongCtrl', function ($scope, SongService, Logger) {

      $scope.song = {};
      $scope.songs = [];

      function loadSongs() {

          SongService.find().then(function(data) {
            $scope.songs = data;
            console.log('data', data);
          }, function(err) {
            Logger.logError('Impossible de charger les sons');
            console.log('err',err);
          });
      }

      loadSongs();

  });
