var myApp = angular.module("myModule", []);
myApp.controller("myController", function($scope){
var reports= [
               {reportNo:1,reportName:"Deposit History", reportUrl:"http://agroex.agrostar.in/report/deposit_history.csv"},
               {reportNo:2,reportName:"AllPackagesReport", reportUrl:"http://agroex.agrostar.in/report/AllPackagesReport.csv"},
               {reportNo:3,reportName:"Incentive Report", reportUrl:"http://agroex.agrostar.in/report/AllPackagesReport.csv"},
               {reportNo:4,reportName:"Incentive Snapshot", reportUrl:"http://agroex.agrostar.in/report/incentive_snapshot.csv"},
               {reportNo:5,reportName:"Quickcash Snapshot", reportUrl:"http://agroex.agrostar.in/report/quickcash_snapshot.csv"},
               {reportNo:6,reportName:"Returnpackage Report", reportUrl:"http://agroex.agrostar.in/report/returnpackage-report.csv"},
               {reportNo:7,reportName:"Report/Vpm Report", reportUrl:"http://agroex.agrostar.in/report/vpm_report.csv"},
               {reportNo:8,reportName:"Google.com", reportUrl:"http://www.google.com"},
             ];
    $scope.reports=reports;
    // add report in array 
   	$scope.createreport = function(){
       $scope.reports.push({reportNo:$scope.reports.length+1,reportName:$scope.reportname,reportUrl:$scope.reporturl});
       $scope.reportname = '';
       $scope.reporturl = '';

    };  
});
==================================================================================================
<table class="table">
      <thead>
        <tr>
          <th>Report No</th>
          <th>Report Name</th>
          <th> Report URL</th>
          <th> Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="report in reports">
          <td>{{report.reportNo}}</td>
          <td>{{report.reportName}}</td>
          <td>{{report.reportUrl}}</td>
          <td ng-show="!rowform.$visible"><button id="editreport" data-toggle="modal" data-target="#editModal" ng-click="rowform.$show()">Edit</button>
          </td> 
        </tr>
      </tbody>
    </table>
    ======================================================================================================================
    <div class="modal fade" id="editModal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Edit Report</h3>
          </div>
          <form class="form-inline" ng-submit="ctrl.submit()" name="myForm">>
            <div class="modal-body">
              <div class="form-group">
                <input type="text" ng-model="ctrl.report.reportname" placeholder="Name" class="form-control" required/>
                <span ng-show="myForm.$dirty && myForm.rname.$error.required">The report name is a required.</span> 
                <br/>
              </div>
              <div class="form-group">  
                <input type="url" ng-model="ctrl.report.url" placeholder="Url" class="form-control" required/>
                <span ng-show="myForm.$dirty && myForm.url.$error.required">The url is required.</span>
              <span ng-show="myForm.$dirty && myForm.url.$invalid">This url is invalid </span><br/><br/>
                <br/>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn" type="submit">Save</button>
              <button class="btn" data-dismiss="modal" type="close">cancel</button>
            </div>
          </form> 
        </div> 
      </div>
    </div>
       <!-- edit report modal end -->
    <button id="addreport" data-toggle="modal" data-target="#createModal">Add Report</button>
    <!-- add report modal -->
    <div class="modal fade" id="createModal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Create Report</h3>
          </div>
          <form class="form-inline" ng-submit="submit()" name="myForm">
            <div class="modal-body">
              <div class="form-group">
                <input type="text" ng-model="reportname" placeholder="Name" class="form-control" required/>
                <span ng-show="myForm.$dirty && myForm.rname.$error.required">The report name is a required.</span> 
              </div>
              <div class="form-group">  
                <input type="url" ng-model="reporturl" placeholder="Url" class="form-control" required/>
                <span ng-show="myForm.$dirty && myForm.url.$error.required">The url is required.</span>
                <span ng-show="myForm.$dirty && myForm.url.$invalid">This url is invalid </span>  
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn" type="submit">Save</button>
              <button class="btn" data-dismiss="modal" type="close">cancel</button>
            </div>
          </form> 
        </div> 
      </div>
    </div>