'use strict';

/**
 * @ngdoc function
 * @name atApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the atApp
 */
angular.module('atApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
