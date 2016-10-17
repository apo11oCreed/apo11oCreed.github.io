var portfolio = angular.module('portfolio',[]);

portfolio.controller('TodoCtrl', function($scope, $http) {
  $http.get('../data.json')
       .then(function(res){
          $scope.todos = res.data;                
        });
});