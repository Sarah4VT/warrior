angular.module('ResourceLocator').factory('Resource', function ResourceFactory($http, $q) {
  var resources;
  
  return {
    all: function() {      
      var deferred = $q.defer();
      
      $http({method: 'GET', url: "/resources"})
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(err) {
          deferred.reject(err)
        });

      return deferred.promise;
    }
  };
});
