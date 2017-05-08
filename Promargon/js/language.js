angular
  .module('app')
  .factory('Language', ['$http', function($http) {
    return {
      get: function() {
        return $http.get('api/lang.json').then(function(response) {
          return response;
        });
      }
    };
  }])