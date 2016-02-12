'use strict';

describe('Controller: AddusermodalCtrl', function () {

  // load the controller's module
  beforeEach(module('jaiyeApp'));

  var AddusermodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddusermodalCtrl = $controller('AddusermodalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
