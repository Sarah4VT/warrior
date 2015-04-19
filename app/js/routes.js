/*
  Configure routes used with ngRoute. We chose not to use $locationProvider.html5Mode(true);
  because using HTML5 pushstate requires that server routes are setup to mirror the routes
  in this file. Since this isn't a node course we're going to skip it. For all intensive
  purposes, html5 mode and url hash mode perform the same when within an angular app.
*/
angular.module('ResourceLocator').config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      // redirect to the resource index
      redirectTo: '/resource'
    })
    
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html',
      controller: 'UsersIndexController'
    })
    
    .when('/users/:id', {
      templateUrl: 'templates/pages/users/show.html',
      controller: 'UsersShowController'
    })
    
    .when('/resource', {
      templateUrl: 'templates/pages/resources/index.html',
      controller: 'ResourcesIndexController'
    })
    
    .when('/resource/new', {
      templateUrl: 'templates/pages/resources/edit.html',
      controller: 'NotesCreateController'
    })
    
    .when('/resource/:id', {
      templateUrl: 'templates/pages/resources/show.html',
      controller: 'NotesShowController'
    })

    .when('/resource/:id/edit', {
      templateUrl: 'templates/pages/resources/edit.html',
      controller: 'NotesEditController'
    })
    
    .when('/profile/edit', {
      templateUrl: 'templates/pages/profile/edit.html',
      controller: 'ProfileEditController'
    })

    .otherwise({redirectTo: '/'});
}]);
