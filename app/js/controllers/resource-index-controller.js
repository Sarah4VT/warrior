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


  $scope.storyModalShown = false;

  $scope.toggleStoryModal = function() {
    $scope.storyModalShown = !$scope.storyModalShown;
  };

  $scope.resourceModalShown = false;

  $scope.toggleResourceModal = function() {
    $scope.resourceModalShown = !$scope.resourceModalShown;
  };

  $scope.recsShown = false;

  $scope.toggleRecs = function(){
    $scope.recsShown = !$scope.recsShown;
  };

  $scope.mentors = [
    {
      "name": "Rachel Nabors",
      "story": "This person's story. Cupcake ipsum dolor sit. Amet tart cookie soufflé soufflé. Tootsie roll lollipop gummies liquorice. Fruitcake dessert cotton candy lollipop lollipop " +
      "jelly beans topping. Oat cake caramels cupcake brownie donut carrot cake bear claw cupcake. Jelly beans tart macaroon liquorice tootsie roll pie. Gummies lollipop sweet powder " +
      "candy canes. Jelly-o pie jujubes fruitcake caramels sweet dessert. Candy gummi bears icing chocolate cake. Croissant candy pastry brownie. Biscuit donut bear claw. Chocolate bar " +
      "cheesecake sweet. Candy dessert marshmallow jelly jujubes."
    },

    {
      "name": "Laura Pal",
      "story":"This person's story. Cupcake ipsum dolor sit. Amet tart cookie soufflé soufflé. Tootsie roll lollipop gummies liquorice. Fruitcake dessert cotton candy lollipop lollipop " +
      "jelly beans topping. Oat cake caramels cupcake brownie donut carrot cake bear claw cupcake. Jelly beans tart macaroon liquorice tootsie roll pie. Gummies lollipop sweet powder " +
      "candy canes. Jelly-o pie jujubes fruitcake caramels sweet dessert. Candy gummi bears icing chocolate cake. Croissant candy pastry brownie. Biscuit donut bear claw. Chocolate bar " +
      "cheesecake sweet. Candy dessert marshmallow jelly jujubes."
    }

  ];

  $scope.resources = [
    {
      "name": "Girl Develop It",
      "type":"In-person classes",

      "description":"Girl Develop It is a nonprofit organization that exists to provide affordable and judgment-free opportunities for women interested in learning web and " +
      "software development. Through in-person classes and community support, Girl Develop It helps women of diverse backgrounds achieve their technology goals and build confidence " +
      "in their careers and their every day lives."
    },

    {
      "name": "Ironyard Academy",
      "type": "Paid",
      "url": "http://theironyard.com/locations/raleigh-durham/",
      "description":"Learn to code. Life's too short for the wrong career."

    }

  ];

})

.directive('submit', function() {
  return {
    templateUrl: '/templates/directives/submit.html'
  };
})

.directive('resource', function() {
  return {
    templateUrl: '/templates/directives/resource.html'
  };
})

.directive('recs', function() {
  return {
    templateUrl: '/templates/directives/recommendations.html'
  };
});
