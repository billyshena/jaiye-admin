'use strict';

/**
 * @ngdoc service
 * @name jaiyeApp.LodashService
 * @description
 * # LodashService
 * Factory in the jaiyeApp.
 */
(function() {
  'use strict';

  angular.module('jaiyeApp')
      .factory('_',
      [
        '$window',
        function service($window) {
          return $window._;
        }
      ]
  );
}());
