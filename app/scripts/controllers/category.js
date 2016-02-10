'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('CategoryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
