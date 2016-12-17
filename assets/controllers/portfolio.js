var app = angular.module('portfolio',[]);

app.controller('portfolioCtrl', function($scope,$http) {
  $http.get('../data.json')
       .then(function(response){
          $scope.myPortfolio = response.data.portfolio;                
        });
});