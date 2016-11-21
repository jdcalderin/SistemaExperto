'use strict';

/**
 * @ngdoc overview
 * @name sistemaExpertoApp
 * @description
 * # sistemaExpertoApp
 *
 * Main module of the application.
 */
angular
  .module('sistemaExpertoApp', [
    'ngAnimate',   
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/inicio');
    $stateProvider
      .state('inicio', {
        url:'/inicio',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'       
      });
      $stateProvider
      .state('cuestionario', {
        url:'/cuestionario',
        templateUrl: 'views/cuestionarioview.html',
        controller: 'CuestionarioCtrl'
      }).state('cuestionario.citas', {
            url: '/citas',
            templateUrl: 'views/citas.html'
        }).state('cuestionario.colores', {
            url: '/colores',
            templateUrl: 'views/colores.html'
        }).state('cuestionario.comida', {
            url: '/comida',
            templateUrl: 'views/comida.html'
        }).state('cuestionario.fiestas', {
            url: '/fiestas',
            templateUrl: 'views/fiestas.html'
        }).state('cuestionario.hobbies', {
            url: '/hobbies',
            templateUrl: 'views/hobbies.html'
        }).state('cuestionario.lugares', {
            url: '/lugares',
            templateUrl: 'views/lugares.html'
        }).state('cuestionario.musica', {
            url: '/musica',
            templateUrl: 'views/musica.html'
        }).state('cuestionario.ocupaciones', {
            url: '/ocupaciones',
            templateUrl: 'views/ocupaciones.html'
        }).state('cuestionario.pasarias', {
            url: '/pasarias',
            templateUrl: 'views/pasarias.html'
        }).state('cuestionario.peliculas', {
            url: '/peliculas',
            templateUrl: 'views/peliculas.html'
        });
        $urlRouterProvider.when('/cuestionario','/citas')
        
  });


