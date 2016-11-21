'use strict';

describe('Controller: CuestionriocontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaExpertoApp'));

  var CuestionriocontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CuestionriocontrollerCtrl = $controller('CuestionriocontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CuestionriocontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
