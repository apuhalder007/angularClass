var app = angular.module('app',[]);
app.controller('appCtrl', function($scope, $http){
	// $scope.friends = $http.get('friends.json')
	$scope.friends = $http({
		method: 'GET',
		url: 'https://api.github.com/users'

	})
	
	.then(function(response){
		console.log(response);
		$scope.friends = response.data;
	})

});

app.directive('friendInfo', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			friend: '=',
			title: '='
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		template: '',
		templateUrl: 'partials/friends-list.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, iElm, iAttrs, controller) {
			
		}
	};
});