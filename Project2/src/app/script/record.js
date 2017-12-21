var app = angular.module("myModule", [])
          .controller("myController", function($scope,$http) {
            $scope.limit=2;
          $scope.recordings = null;
          $http.get('http://192.168.2.61/asterisk/api.php/', {}).then(function (responseData) {  
          $scope.recordings=responseData.data;

          $scope.recordings = responseData.data.map(function (recording) { 
            return angular.extend(recording, 
              { 'Show': true,
            }); 
          });
        });  
  
          var url="http://192.168.2.61/asterisk/curl.php?value=";
          $scope.myFunc = function(caller_id) {
                      var tempurl=url+caller_id;
                      window.open(tempurl);
                      // window.close();

          };
         $scope.removeRow = function(i){ 
          var comArr = eval( $scope.recordings );
          $scope.recordings.splice( i, 1 );
          alert('row deleted successfully!'); 
          };
      });