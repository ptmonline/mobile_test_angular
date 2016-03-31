angular.module('MobileApp')
  .directive('headerNav', function(){
    return{
      restrict: 'E',
      template:'<div class="header"><div class="back-btn"><a ng-href="#/chat">Back</a></div><div class="user-name">{{profileName}}</div></div>'
    }
  })
