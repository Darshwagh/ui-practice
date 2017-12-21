var app = angular.module('getserviceApp',['angularUtils.directives.dirPagination']);
app.controller('FarmerPostCtrl', function ($scope, $http) {
    $scope.Posts=[];
    $http({
		method: 'get',
		url: 'http://communicationtest.agrostar.in/communicationservice/v1/post?limit=10&offset=10&language=en&curated=false',
		headers: {
            "x-authorization-token": "4f06216a-cd4b-430c-b9e9-09efd9820905",
            "source": "APP",
        }
		}).then(function (responseData) {
    $scope.Posts=responseData.data.responseData.posts;
    console.log($scope.Posts);
    }).catch(function(){
      alert("somthing went wrong"); 
    });  
    

});
