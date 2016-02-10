/**
 * Created by bshen on 10/02/16.
 */

(function() {
  'use strict';

  angular.module('jaiyeApp')
      .factory('AuthService',
      [
        'Storage',
        function(Storage) {
          return {

            /**
             * Method to check if current user is authenticated or not. This will just
             * simply call 'Storage' service 'get' method and returns it results.
             *
             * @returns {*}
             */
            isAuthenticated: function() {
              return Storage.get('token') != null;
            }

          };
        }
      ]
  );
}());
