angular.module('MobileApp')
  .controller('profileController', function($scope){
    $scope.isOnline = true;
    $scope.profileName = 'Sophie';
    $scope.age = 22
    $scope.addFriend = function(){
      var d = document.getElementById('containerId');
      d.classList.contains('touched') ? d.classList.remove("touched") : d.classList.add("touched");
    }
  })
