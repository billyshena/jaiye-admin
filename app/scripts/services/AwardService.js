'use strict';

/**
 * @ngdoc service
 * @name jaiyeApp.AwardService
 * @description
 * # AwardService
 * Factory in the jaiyeApp.
 */
angular.module('jaiyeApp')
  .factory('AwardService', function ($http) {

      var endpoint = 'award';
      var awardService = {


        create: function(credentials) {

          var promise = $http.post(config.appUrl + '/' + endpoint, credentials).then(function(response) {
            return response.data;
          });

          return promise;

        },


        find: function(where) {

          var promise = $http.get(config.appUrl + '/' + endpoint, { params: where }).then(function(response) {
            return response.data;
          });
          return promise;

        },

        update: function(params) {

          var promise = $http.put(config.appUrl + '/' + endpoint + '/' + params.id, params).then(function(response) {
            return response.data;
          });
          return promise;

        },

        delete: function(id) {

          var promise = $http.delete(config.appUrl + '/' + endpoint + '/' + id).then(function(response) {
            return response.data;
          });
          return promise;

        }

      };

      return awardService;
  });
