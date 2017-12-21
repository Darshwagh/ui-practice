var myApp = angular.module("myModule", []);
myApp.controller("myController", function($scope){
var reports= [
               {no:1,reportname:"Deposit History", url:"http://agroex.agrostar.in/report/deposit_history.csv"},
               {no:2,reportname:"AllPackagesReport", url:"http://agroex.agrostar.in/report/AllPackagesReport.csv"},
               {no:3,reportname:"Incentive Report", url:"http://agroex.agrostar.in/report/AllPackagesReport.csv"},
               {no:4,reportname:"Incentive Snapshot", url:"http://agroex.agrostar.in/report/incentive_snapshot.csv"},
               {no:5,reportname:"Quickcash Snapshot", url:"http://agroex.agrostar.in/report/quickcash_snapshot.csv"},
               {no:6,reportname:"Returnpackage Report", url:"http://agroex.agrostar.in/report/returnpackage-report.csv"},
               {no:7,reportname:"Report/Vpm Report", url:"http://agroex.agrostar.in/report/vpm_report.csv"},
               {no:8,reportname:"Google.com", url:"http://www.google.com"},
             ];
    $scope.reports=reports;
    // add report in array 
   	$scope.submit = function(){
   	   var report={no:$scope.reports.length+1,reportname:$scope.reportname,url:$scope.url};
       $scope.reports.push(report);
       $scope.reportname = '';
       $scope.url = '';
       console.log('Saving New Report',report); 
       };
       
       $scope.edit = function(no){
                  console.log('no to be edited', no);
                  for(var i = 0; i <reports.length; i++){
                      if(reports[i].no === no) {
                         report = angular.copy(reports[i]);
                         break;
                      }
                  }
              };


      
});


