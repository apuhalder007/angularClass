var app = angular.module('app', [])
.controller('ListCtrl', function($scope, messageService){
  $scope.messages = messageService.messages;
  $scope.status = messageService.status;

  $scope.$watch(function () { return messageService.status }, function (newVal, oldVal) {
    if (typeof newVal !== 'undefined') {
        $scope.status = newVal;
    }
  });

})
.controller('PostCtrl', function($scope, messageService){
  $scope.newMessage = null;
  $scope.counter = 0;
  $scope.addMessage = function(newMessage){
    $scope.counter++;
    messageService.messages.push({id : $scope.counter, text : newMessage});
    $scope.newMessage = '';
    messageService.changeStatus($scope.counter);
  }

})
.service('messageService', function(){
  this.status = 0;
  this.messages = [];
  this.changeStatus = function(val){
     this.status = val;
  }
});
