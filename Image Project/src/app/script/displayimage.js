var app = angular.module('getserviceApp', ['angularUtils.directives.dirPagination']);
	app.controller('imgdisplayCtrl', function ($scope, $http) {
		$scope.photos = null;
		// $scope.totalItems = 100;
		// $scope.maxSize = 5; 
		$http({
		method: 'get',
		 url: 'https://unsplash.com/napi/search?query=tree',
		headers: {'Authorization': 'Bearer 73e3ec998433703037035b7132f79ff1dd4525a4578ae9d94af0d1ded6d1b1f9'}
		}).then(function (responseData) {
		$scope.photos=responseData.data.photos.results;
		console.log($scope.photos);
		
		});
	
});