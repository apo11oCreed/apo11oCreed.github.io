var app = angular.module('portfolio',[]);

// app.controller('portfolioCtrl', function($scope,$http) {

//   $http.get('../data.json')
//        .then(function(response){
//           $scope.myPortfolio = response.data.portfolio;                
//         });
// });

// angular.module('myApp',['ngSanitize']).config(function($sceDelegateProvider) {
// $sceDelegateProvider.resourceUrlWhitelist([
//     // Allow same origin resource loads.
//     'self',
//     // Allow loading from our assets domain.  Notice the difference between * and **.
//     'https://i.imgur.com/**'
//   ]);

// });

// var app2 = angular.module('portfoliowebp',[]);

app.controller('portfolioCtrlWebP', function($scope,$http) {
  $http.get('../data-webp.json')
       .then(function(response){
          $scope.myPortfolioWebP = response.data.portfoliowebp;                
        });
});



app.filter('trustHtml',function($sce){
  return function(html){
    return $sce.trustAsHtml(html)
  }
});