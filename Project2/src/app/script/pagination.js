var app = angular.module('angularTable', ['angularUtils.directives.dirPagination']);

app.controller('listdata',function($scope){
    $scope.users = [{"id":1,"first_name":"Heather","last_name":"Bell","hobby":"Eating"},
                    {"id":2,"first_name":"Andrea","last_name":"Dean","hobby":"Gaming"},
                    {"id":3,"first_name":"Peter","last_name":"Barnes","hobby":"Reading Books"},
                    {"id":4,"first_name":"Harry","last_name":"Bell","hobby":"Youtubing"},
                    {"id":5,"first_name":"Deborah","last_name":"Burns","hobby":"Fishing"},
                    {"id":6,"first_name":"Larry","last_name":"Kim","hobby":"Skipping"},
                    {"id":7,"first_name":"Jason","last_name":"Wallace","hobby":"Football"},
                    {"id":8,"first_name":"Russell","last_name":"Patterson","hobby":"Singing"},
                    {"id":9,"first_name":"Heather","last_name":"Bell","hobby":"Eating"},
                    {"id":10,"first_name":"Andrea","last_name":"Dean","hobby":"Gaming"},
                    {"id":11,"first_name":"Peter","last_name":"Barnes","hobby":"Reading Books"},
                    {"id":12,"first_name":"Harry","last_name":"Bell","hobby":"Youtubing"},
                    {"id":13,"first_name":"Deborah","last_name":"Burns","hobby":"Fishing"},
                    {"id":14,"first_name":"Larry","last_name":"Kim","hobby":"Skipping"},
                    {"id":15,"first_name":"Jason","last_name":"Wallace","hobby":"Football"},
                    {"id":16,"first_name":"Russell","last_name":"Patterson","hobby":"Singing"},
                    {"id":17,"first_name":"Heather","last_name":"Bell","hobby":"Eating"},
                    {"id":18,"first_name":"Andrea","last_name":"Dean","hobby":"Gaming"},
                    {"id":19,"first_name":"Peter","last_name":"Barnes","hobby":"Reading Books"},
                    {"id":20,"first_name":"Harry","last_name":"Bell","hobby":"Youtubing"},
                    {"id":21,"first_name":"Deborah","last_name":"Burns","hobby":"Fishing"},
                    {"id":22,"first_name":"Larry","last_name":"Kim","hobby":"Skipping"},
                    {"id":23,"first_name":"Jason","last_name":"Wallace","hobby":"Football"},
                    {"id":24,"first_name":"Russell","last_name":"Patterson","hobby":"Singing"}]
    
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
});