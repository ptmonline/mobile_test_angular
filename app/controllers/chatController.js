angular.module('MobileApp')
  .controller('chatController', function($scope){
    var messagesArray = ['It has survived not only five centuries, but also the leap into electronic.', 'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'It is a long established fact that a reader will be distracted by the readable content.'];
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
