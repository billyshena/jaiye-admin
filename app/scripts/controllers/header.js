'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('HeaderCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
