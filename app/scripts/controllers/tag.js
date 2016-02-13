'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:TagCtrl
 * @description
 * # TagCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('TagCtrl', function ($scope, TagService, Logger, $window) {

      $scope.tags = [];
      $scope.tag = {};

      function loadTags() {

        TagService.find().then(function(data) {
          $scope.tags = data;
        }, function(err) {
          Logger.logError('Impossible de charger les tags');
          console.log('err',err);
        });

      }

      $scope.add = function() {

        TagService.create($scope.tag).then(function(data) {
          $scope.tags.push(data);
          $scope.tag = {};
          Logger.logSuccess('Le tag '  + data.name + ' a bien été crée !');
        }, function(err) {
          Logger.logError('Erreur lors de la création');
        });

      };


      $scope.update = function(tag) {

        TagService.update(tag).then(function(data) {
          console.log('updated', data);
        }, function(err) {
          Logger.logError('Erreur lors de la modification');
          console.log('err', err);
        });
      };


      $scope.delete = function(tag) {

        var confirm = $window.confirm('Êtes-vous sur de vouloir supprimer ce tag ?');
        if(!confirm) {
          return;
        }

        TagService.delete(tag.id).then(function() {
          Logger.logSuccess('Le tag ' + tag.name + ' a bien été supprimé !');
          $scope.tags.splice($scope.tags.indexOf(tag), 1);
        }, function(err) {
          Logger.logError('Erreur lors de la suppression');
          console.log('err', err);
        });

      };


      loadTags();


  });
