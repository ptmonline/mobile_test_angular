angular.module('MobileApp')
  .directive('onlineStatus', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/templates/onlineStatus_template.html'
    }
  })
