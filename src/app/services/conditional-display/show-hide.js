/**
 * Created by neusoft on 2016/4/20.
 */
angular.module('Scream')
	.controller('DisplayCtrl', ['$scope', 'DisplayService', function ($scope, displayService) {
		$scope.hide = function(){
			return displayService.hide;
		};
		$scope.show = function(){
			return displayService.show();
		};

		$scope.switch = function(){
			var isDisplay = true;

		};

		$scope.ifCondition = function(){

		};

		$scope.include = function(){

		};
	}]);