angular.module('ResourceLocator').controller('UsersIndexController', function($scope, User) {
  
  // Without NgResource
  // User.all().success(function(data) {
  //   $scope.users = data;
  // });
  
  // With NgResource
  $scope.users = User.query();

});
