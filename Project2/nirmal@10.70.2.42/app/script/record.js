var app = angular.module("myModule", [])
          .controller("myController", function($scope,$http) {
          $scope.recordings = null;
          $http.get('http://192.168.2.61/asterisk/api.php/', {}).then(function (responseData) {  
          $scope.recordings=responseData.data;

        });  
          $("#table").on('click','.btn1-success',function(){
             $(this).closest('tr').remove();
           });
var url="http://192.168.2.61/asterisk/curl.php?value=";
          $scope.myFunc = function(caller_id) {
                      var tempurl=url+caller_id;
                      window.open(tempurl);
                      window.close();

          };
      });