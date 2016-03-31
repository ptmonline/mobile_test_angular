angular.module('MobileApp')
  .controller('chatController', function($scope){
    var messagesArray = ['Hello there, how are you?', 'Today is a weird day', 'this is the third random message'];
    var randomMessage = Math.floor((Math.random() * 3));
    $scope.profileName = 'Sophie';
    $scope.message = messagesArray[randomMessage];

    //Check if there session stored;
    sessionStorage.getItem("stored_messages") !== null ? $scope.messages = JSON.parse(sessionStorage.getItem("stored_messages")) : $scope.messages=[];
    
    //add message to messages array and stored to session storage
    $scope.addMessage = function(newmessage) {
      $scope.messages.push(newmessage);
      $scope.newmessage = '';
      window.sessionStorage.setItem('stored_messages', JSON.stringify($scope.messages))
    };
  })
