var app = angular.module('portfolio',[]);

app.controller('portfolioCtrl', function($scope,$http) {
  $http.get('../data.json')
       .then(function(response){
          $scope.myPortfolio = response.data.portfolio;                
        });
});

// var app2 = angular.module('portfoliowebp',[]);

app.controller('portfolioCtrlWebP', function($scope,$http) {
  $http.get('../data-webp.json')
       .then(function(response){
          $scope.myPortfolioWebP = response.data.portfoliowebp;                
        });
});