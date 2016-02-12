'use strict';

describe('Controller: UpdateusermodalCtrl', function () {

  // load the controller's module
  beforeEach(module('jaiyeApp'));

  var UpdateusermodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdateusermodalCtrl = $controller('UpdateusermodalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
