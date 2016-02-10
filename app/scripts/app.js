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
  .run(function($rootScope, $state, AuthService) {

      $rootScope.$on("$stateChangeStart", function (event, toState) {
        $rootScope.title = toState.title;

        if(toState.authenticate && !AuthService.isAuthenticated()) {

          event.preventDefault();
          $state.go('login');

        }


      });
  })
  .config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.interceptors.push('AuthInterceptor');

    $urlRouterProvider.otherwise("/login");

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
          views: {
            '': {
              controller: 'SongCtrl',
              templateUrl: '/views/song.html',
            },
            'theHeader@': {
              templateUrl: '/views/partials/header.html',
              controller: 'HeaderCtrl'
            },
            'theNav@': {
              templateUrl: '/views/partials/navigation.html'
            }
          },
          authenticate: true,
          title: 'Liste des songs'
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
        })
        .state('login', {
          url: '/login',
          controller: 'LoginCtrl',
          templateUrl: '/views/login.html'
        });


  });
