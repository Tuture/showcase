'use strict';
angular.module('showcaseApp')
  .controller('cvCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('data/donnee.json')
      .success(function(donnee) {
        $scope.personal = donnee.title.personal;
        $scope.lastName = donnee.identity.lastName;
        $scope.firstName = donnee.identity.firstName;
        $scope.streetNum = donnee.identity.address.streetNum;
        $scope.streetName = donnee.identity.address.streetName;
        $scope.zipCode = donnee.identity.address.zipCode;
        $scope.town = donnee.identity.address.town;
        $scope.phone = donnee.identity.phone;
        $scope.mail = donnee.identity.mail;

        $scope.currentTitle = donnee.title.currentTitle;
        $scope.currentTitleValue = donnee.currentTitle;

        $scope.workExp = donnee.title.workExp;
        $scope.date1 = donnee.workExperience[0].date;
        $scope.title = donnee.workExperience[0].title;
        $scope.company = donnee.workExperience[0].company;
        $scope.description = donnee.workExperience[0].description;

        $scope.education = donnee.title.education;
        $scope.arrayEducation = donnee.education;

        $scope.languageTitle = donnee.title.languageTitle;
        $scope.arraylanguage = donnee.language;

        $scope.skills = donnee.title.skills;
        $scope.arrayskills = donnee.skills;
      });

  });
