angular.module('myApp', [])
          .controller('AppController', ['$scope', function($scope) {
              var self = this;
              self.report={no:null,reportname:'',url:''};
              self.no = 9;
               
              self.reports = [
                      {no:1,reportname:"Deposit History", url:"http://agroex.agrostar.in/report/deposit_history.csv"},
               {no:2,reportname:"AllPackagesReport", url:"http://agroex.agrostar.in/report/AllPackagesReport.csv"},
               {no:3,reportname:"Incentive Report", url:"http://agroex.agrostar.in/report/AllPackagesReport.csv"},
               {no:4,reportname:"Incentive Snapshot", url:"http://agroex.agrostar.in/report/incentive_snapshot.csv"},
               {no:5,reportname:"Quickcash Snapshot", url:"http://agroex.agrostar.in/report/quickcash_snapshot.csv"},
               {no:6,reportname:"Returnpackage Report", url:"http://agroex.agrostar.in/report/returnpackage-report.csv"},
               {no:7,reportname:"Report/Vpm Report", url:"http://agroex.agrostar.in/report/vpm_report.csv"},
               {no:8,reportname:"Google.com", url:"http://www.google.com"},
              ];
               
              self.submit = function() {
                  if(self.report.no === null)
                    {
                      self.report.no = self.no++;
                      console.log('Saving New Report', self.report);    
                      self.reports.push(self.report);

                      $('#editModal').modal('hide');
                      self.report={no:null,reportname:'',url:''};
                      // $scope.myForm.$setPristine();
                    }
                  else
                    {
                      for(var i = 0; i < self.reports.length; i++)
                        {
                          if(self.reports[i].no === self.report.no) 
                            {
                              self.reports[i] = self.report;
                               $('#editModal').modal('hide');
                              break;
                            }
                        }
                      // console.log('report updated with no ', self.report.no);
                    }
                    self.reset();
                  };
               
              self.edit = function(no){
                  // console.log('no to be edited', no);
                  for(var i = 0; i < self.reports.length; i++){
                      if(self.reports[i].no === no) {
                         self.report = angular.copy(self.reports[i]);
                         break;
                      }
                  }
              }
                self.remove = function(no){
                  // console.log('no to be deleted', no);
                  for(var i = 0; i < self.reports.length; i++){
                      if(self.reports[i].no === no) {
                         self.reports.splice(i,1);
                         // if(self.report.no === no){//It is shown in form, reset it.
                         //    self.reset();
                         // }
                         break;
                      }
                  }
              }

                 
      }]);