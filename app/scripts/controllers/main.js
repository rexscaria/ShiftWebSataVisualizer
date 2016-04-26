'use strict';

/**
 * @ngdoc function
 * @name atApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the atApp
 */
angular.module('atApp')
  .controller('MainCtrl', function ($scope, $firebaseArray) {

  	$scope.usersref = new Firebase('https://swiftbalanceapp.firebaseio.com/users');
  	$scope.users = $firebaseArray($scope.usersref);

  	$scope.setUser = function(user){
  		$scope.user = user;
  	};

  	$scope.exerciseref = new Firebase('https://swiftbalanceapp.firebaseio.com/exercises');
  	$scope.exercises = $firebaseArray($scope.exerciseref);

  	$scope.setExercise = function(exercise){
  		$scope.exercise = exercise;
  	};

  	$scope.draw = function(){
  		var di = $scope.exercise[$scope.user.$id];

  		var xVals = Object.keys(di);
  		var yVals = Object.keys(di).map(function(key){return [new Date(key*1000), String(di[key])]});
  		//console.log(yVals)

  		new Dygraph(
          document.getElementById('graph'),
          yVals,
          {
            title: $scope.exercise.$id +' - '+$scope.user.$id,
            labels:['Time', 'Score'],
            labelsDivStyles: { 'textAlign': 'right' },
            showRangeSelector: true,
            connectSeparatedPoints: true,
            drawPoints: true,
            valueRange: [0,100]
          }
      );
  	};
  	//console.log($scope.exercises)
  });
