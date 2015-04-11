'use strict';
angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cv', {
        templateUrl: 'views/CV.html',
        controller: 'cvCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('indexCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('data/donnee.json')
      .success(function(donnee) {
        $scope.lastName = donnee.identity.lastName;
        $scope.firstName= donnee.identity.firstName;
        $scope.mail = donnee.identity.mail;
        $scope.streetNum = donnee.identity.address.streetNum;
        $scope.streetName = donnee.identity.address.streetName;
        $scope.zipCode = donnee.identity.address.zipCode;
        $scope.town = donnee.identity.address.town;
      });
  });
