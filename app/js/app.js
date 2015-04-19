// Declare app level module which depends on ngRoute
angular.module('ResourceLocator', ['ngRoute', 'ngResource', 'Gravatar'])
.config(function($gravatarProvider){
  $gravatarProvider.setSize(100);
});
