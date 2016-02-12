/**
 * Created by bshen on 11/02/16.
 */
angular
    .module('jaiyeApp')
    .factory('SongService', function($http) {

      var endpoint = 'song';
      var songService = {


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

      return songService;

    });