'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('CategoryCtrl', function ($scope, CategoryService, Logger) {

      $scope.category = {};
      $scope.categories = [];


      function loadCategories() {

        CategoryService.find().then(function(data) {
          console.log('data', data);
          $scope.categories = data;
        }, function(err) {
          Logger.logError('Impossible de charger les catégories');
          console.log('err', err);
        });

      }

      $scope.add = function() {

        CategoryService.create($scope.category).then(function(data) {
          Logger.logSuccess('La catégorie ' + $scope.category.name + ' a bien été crée !');
          $scope.categories.push(data);
        });

      };


      $scope.update = function(category) {

        CategoryService.update(category).then(function(data) {
          category = data;
          Logger.logSuccess('Modifications enregistrées !');
        }, function(err) {
          console.log('err', err);
          Logger.logError('Erreur lors de la modification');
        });

      };


      $scope.delete = function(category) {

        var res = confirm('Êtes-vous sûr de vouloir supprimer ' + category.name);
        if(!res) {
          return;
        }

        CategoryService.delete(category.id).then(function() {
          $scope.categories.splice($scope.categories.indexOf(category), 1);
          Logger.logSuccess('La catégorie ' + category.name + ' a bien été supprimée !');
        }, function(err) {
          console.log('err', err);
          Logger.logError('Impossible de supprimer la catégorie');
        });

      };


      loadCategories();


  });
