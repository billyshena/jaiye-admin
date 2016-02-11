'use strict';

describe('Controller: AddsongmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('jaiyeApp'));

  var AddsongmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddsongmodalCtrl = $controller('AddsongmodalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
