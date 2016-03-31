angular.module('MobileApp',['ngRoute']);

angular.module('MobileApp')
  .controller('MyController', function($scope){
    $scope.goingBack = function(){
      alert('ths had been clicked');
    }
  })
