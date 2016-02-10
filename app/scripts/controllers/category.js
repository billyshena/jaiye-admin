'use strict';

/**
 * @ngdoc function
 * @name jaiyeApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the jaiyeApp
 */
angular.module('jaiyeApp')
  .controller('CategoryCtrl', function ($scope, CategoryService) {

      console.log('CategoryCtrl');

      CategoryService.find().then(function(data) {
        console.log('data', data);
      }, function(err) {
        console.log('err', err);
      });

  });
