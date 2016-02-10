/**
 * Created by bshen on 10/02/16.
 */
angular
    .module('jaiyeApp')
    .factory('CategoryService', function($http) {

      var endpoint = 'category';
      var categoryService = {


        create: function(credentials) {

          var promise = $http.post(config.appUrl + '/' + endpoint, credentials).then(function(response) {
            return response.data;
          });

          return promise;

        },


        find: function(where) {

          var promise = $http.get(config.appUrl + '/' + endpoint, where).then(function(response) {
            return response.data;
          });
          return promise;

        }

      };

      return categoryService;

    });