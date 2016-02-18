'use strict';

describe('Controller: AwardCtrl', function () {

  // load the controller's module
  beforeEach(module('jaiyeApp'));

  var AwardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AwardCtrl = $controller('AwardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
