// MODULE
var myApp = angular
  .module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', ['$scope', function($scope) {



}]);

var searchPeople = function searchPeople(firstName, lastName, height, age, occupation) {
  return 'jane doe';
};
var searchPeopleString = searchPeople.toString();
console.log(searchPeopleString);
