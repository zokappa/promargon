angular.module('app', [
    'ui.router'
  ]).config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
        url: '/'
        , templateUrl: 'views/home/home.html'
        , controller: 'homeCtrl'
    }).state('about', {
        url: '/about'
        , templateUrl: 'views/about/about.html'
        , controller: 'aboutCtrl'
    }).state('contact', {
        url: '/contact'
        , templateUrl: 'views/contact/contact.html'
        , controller: 'contactCtrl'
    }).state('services', {
        url: '/services'
        , templateUrl: 'views/services/services.html'
        , controller: 'servicesCtrl'
    }).state('products', {
        url: '/products'
        , templateUrl: 'views/products/products.html'
        , controller: 'productsCtrl'
        , resolve: {
            Products: [ '$http', function($http){
                return $http.get('api/products.json').then(function(response){
                    return response.data;
                })
            }]
        }
    })
  }]).controller('indexCtrl', ['$scope', function ($scope) {
    
  }]).run(['$templateCache', function ($templateCache) {
    $templateCache.removeAll();
}]);