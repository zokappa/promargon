angular.module('app').controller('productsCtrl', ['$scope', 'Products', '$templateCache', function ($scope, Products, $templateCache) {
    $scope.products = Products.products;
    console.log($scope.products);
    $templateCache.removeAll();
    $scope.tab = 2;
    $scope.changeTab = function(tab){
        $scope.tab = tab;
        console.log($scope.tab);
    }
  }]).run(['$templateCache', function ($templateCache) {
    $templateCache.removeAll();
}]);