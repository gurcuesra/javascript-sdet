var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.firstName = 'Esra';
  $scope.lastName = 'Kartal';
});


app.controller('SecondCtrl', function($scope) {
  $scope.name = 'Ali';
});