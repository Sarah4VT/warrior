/*
This is a way of handling ajax requests using NgResource, it performs a similar function
to the Note Service.
*/

angular.module('ResourceLocator').factory('Resource', function ResourceFactory($resource) {
  return $resource('/resource/:id', {}, {
    update: {
      method: "PUT"
    }
  });
});
