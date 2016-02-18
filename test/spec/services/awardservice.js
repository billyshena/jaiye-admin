'use strict';

describe('Service: AwardService', function () {

  // load the service's module
  beforeEach(module('jaiyeApp'));

  // instantiate service
  var AwardService;
  beforeEach(inject(function (_AwardService_) {
    AwardService = _AwardService_;
  }));

  it('should do something', function () {
    expect(!!AwardService).toBe(true);
  });

});
