'use strict';

describe('Service: LodashService', function () {

  // load the service's module
  beforeEach(module('jaiyeApp'));

  // instantiate service
  var LodashService;
  beforeEach(inject(function (_LodashService_) {
    LodashService = _LodashService_;
  }));

  it('should do something', function () {
    expect(!!LodashService).toBe(true);
  });

});
