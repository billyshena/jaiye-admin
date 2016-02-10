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
  .run(function($rootScope) {

      $rootScope.$on("$stateChangeStart", function (event, toState) {
        $rootScope.title = toState.title;
      });
  })
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
      })
        .state('category', {
          url: '/category',
          controller: 'CategoryCtrl',
          templateUrl: '/views/category.html',
          title: 'Liste des catégories'
        })
        .state('song', {
          url: '/song',
          controller: 'SongCtrl',
          templateUrl: '/views/song.html'
        })
        .state('user', {
          url: '/user',
          controller: 'UserCtrl',
          templateUrl: '/views/user.html'
        })
        .state('tag', {
          url: '/tag',
          controller: 'TagCtrl',
          templateUrl: '/views/tag.html'
        });


  });
