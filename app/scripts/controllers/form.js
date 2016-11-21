'use strict';

/**
 * @ngdoc function
 * @name sistemaExpertoApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the sistemaExpertoApp
 */
angular.module('sistemaExpertoApp')
  .controller('FormCtrl', function ($scope) {
  

     $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
    

  });
