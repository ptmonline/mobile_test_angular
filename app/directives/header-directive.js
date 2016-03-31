angular.module('MobileApp')
  .directive('headerNav', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/templates/headerNav_template.html'
    }
  })
