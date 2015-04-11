'use strict';
angular.module('showcaseApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('data/donnee.json')
      .success(function(donnee) {
        $scope.lastName = donnee.identity.lastName;
        $scope.firstName= donnee.identity.firstName;
      });
  });
