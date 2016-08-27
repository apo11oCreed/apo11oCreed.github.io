var Porfolio = angular.module('portfolio', []);

Portfolio.controller('TodoCtrl', function($scope, $http) {
  $http.get('data.json')
       .then(function(res){
          $scope.todos = res.data;                
        });
});