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
    'ui.router',
    'angularMoment',
    'ui.bootstrap'
  ])
  .run(function($rootScope, $state, AuthService, amMoment) {

      amMoment.changeLocale('fr');

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
        controller: function($state) {
          $state.go('song');
        }
      })
        .state('category', {
          url: '/category',
          views: {
            '': {
              controller: 'CategoryCtrl',
              templateUrl: '/views/category.html',
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
          title: 'Liste des catégories'
        })
        .state('song', {
          url: '/song',
          views: {
            '': {
              controller: 'SongCtrl',
              templateUrl: '/views/song.html'
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
          title: 'Tous les sons'
        })
        .state('user', {
          url: '/user',
          views: {
            '': {
              controller: 'UserCtrl',
              templateUrl: '/views/user.html'
            },
            'theHeader@': {
              templateUrl: '/views/partials/header.html',
              controller: 'HeaderCtrl'
            },
            'theNav@': {
              templateUrl: '/views/partials/navigation.html'
            }
          },
          title: 'Tous les artistes'

        })
        .state('tag', {
          url: '/tag',
          views: {
            '': {
              controller: 'TagCtrl',
              templateUrl: '/views/tag.html'
            },
            'theHeader@': {
              templateUrl: '/views/partials/header.html',
              controller: 'HeaderCtrl'
            },
            'theNav@': {
              templateUrl: '/views/partials/navigation.html'
            }
          },
          title: 'Liste des tags'
        })
        .state('login', {
          url: '/login',
          controller: 'LoginCtrl',
          templateUrl: '/views/login.html'
        });


  });
