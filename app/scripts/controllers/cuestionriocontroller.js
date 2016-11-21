'use strict';

/**
 * @ngdoc function
 * @name sistemaExpertoApp.controller:CuestionriocontrollerCtrl
 * @description
 * # CuestionriocontrollerCtrl
 * Controller of the sistemaExpertoApp
 */
angular.module('sistemaExpertoApp')
  .controller('CuestionarioCtrl', function ($scope) {

    $scope.formData = {};

    // function to process the form
    $scope.processForm = function () {
     
     //valido que no existan preguntas sin responder

      var Total = 0 + parseInt($scope.formData.musica) + parseInt($scope.formData.citas) + parseInt($scope.formData.peliculas) + parseInt($scope.formData.ocupaciones) + parseInt($scope.formData.hobbies) + parseInt($scope.formData.colores) + parseInt($scope.formData.comida) + parseInt($scope.formData.fiestas) + parseInt($scope.formData.lugares);


      // realizo asignacion de personasjes 

      var x = Total;
      switch (true) {
        case (x > 9 && x < 17):
          alert("Tú eres Garfield");
          break;
        case (x > 16 && x < 24):
          alert("Tú eres Snoopy");
          break;
        case (x > 23 && x < 29):
          alert("Tú eres Elmo (Plaza Sésamo)");
          break;
        case (x > 28 && x < 36):
          alert("Tú eres Bob Esponja");
          break;
        case (x > 35 && x < 44):
          alert("Tú eres Charlie Brown");
          break;
        case (x > 43 && x < 51):
          alert("Tú eres Dexter");
          break;       
        default:
          alert("No Estas clasificado");
          break;
      }


    };


//http://plnkr.co/edit/pEXXDYLl0NtkqupEXaJK?p=preview

  });
