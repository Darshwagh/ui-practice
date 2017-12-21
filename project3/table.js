var s1={Name:"Ravi",Roll_No:"1",Age:"20"};
var s2={Name:"Raju",Roll_No:"2",Age:"19"};
var s3={Name:"Ram",Roll_No:"3",Age:"20"};
var s4={Name:"Sham",Roll_No:"4",Age:"21"};
var s5={Name:"Raje",Roll_No:"5",Age:"20"};
var s6={Name:"Rudra",Roll_No:"6",Age:"22"};
var s7={Name:"Dursh",Roll_No:"7",Age:"23"};
var s8={Name:"prashant",Roll_No:"8",Age:"25"};

var arr=[s1,s2,s3,s4,s5,s6,s7,s8];

var headerTemplate="<thead> \
                     <tr>\
                     <td>Name</td>\
                     <td>Roll_No</td>\
                     <td>Age</td>\
                      </tr>\
                     </thead>";
var toReturn="";
arr.forEach(function(row){
	toReturn += "<tr>\
	             <td> "+row.Name+"</td>\
	             <td>"+row.Roll_No+"</td>\
	             <td>"+row.Age+"</td>\
	            </tr>";
});
var template="<tbody>"+ toReturn+"</tbody>";
var finalHtml=headerTemplate +template;
document.getElementById("table").innerHTML = finalHtml;