// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('ListController', ["$scope", "$http","$firebaseArray", function($scope, $http, $firebaseArray){
  var ref = new Firebase('https://brilliant-inferno-4682.firebaseio.com/items');
  var list = $firebaseArray(ref);
  $scope.foods = list;
  $scope.onItemDelete = function(item){
    $scope.foods.splice($scope.foods.indexOf(item),1);
  }
  $scope.toggleStar = function(item){
    item.star = !item.star;
    list.$save(item).then(function(ref){

    });
  }
  $scope.doRefresh = function(){
    var list = $firebaseArray(ref);
    $scope.foods = list;
    $scope.$broadcast('scroll.refreshComplete');
  }
  $scope.calories = 1000;
  $scope.total_fat = 40;
  $scope.carbohydrates = 100;
  $scope.protein = 40;
}]);