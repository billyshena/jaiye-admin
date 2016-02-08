'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
