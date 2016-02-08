'use strict';

/**
 * @ngdoc overview
 * @name jaiyeApp
 * @description
 * # jaiyeApp
 *
 * Main module of the application.
 */
angular
  .module('jaiyeApp', [
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.interceptors.push('AuthInterceptor');

    console.log('$stateProvider', $stateProvider);

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: '/views/home.html'
      });

  });
