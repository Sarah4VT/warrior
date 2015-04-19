angular.module('ResourceLocator').controller('ResourcesIndexController', function($scope, Resource, Session) {
  // Without NgResource
  // Note.all().success(function(data) {
  //   $scope.notes = data;
  // });
  
  // With NgResource
  $scope.notes = Resource.query();

  Session.sessionData().success(function(sessionUser) {
    // Create a new User from the session user data
    $scope.loggedIn = !!sessionUser;
  });
});
