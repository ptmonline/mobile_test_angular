angular.module('MobileApp')
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl: 'views/profile.html',
        controller: 'profileController'
      })
      .when('/chat',{
        templateUrl: 'views/chat.html',
        controller: 'chatController',
        constrollerAs: 'chatCtrl'
      })
  }])
