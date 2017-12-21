
var mydata1 = 

 {
  packageId: "AGRO1000000",
  delivery_date_time: "21-03-2016  11:45:23 AM",
  description: {name:"Prashant Wagh",village:"P.devi",taluka:"Motala"},
  amount:"300"
 };
var mydata2=
{
  packageId: "AGRO2000000",
  delivery_date_time: "25-03-2016  10:45:23 AM",
  description: {name:"Manoj Wagh",village:"P.devi",taluka:"Motala"},
  amount:"5000"
 };
var mydata3=
{
   packageId: "AGRO3000000",
  delivery_date_time: "30-03-2016  10:45:23 AM",
  description: {name:"Rudra Wagh",village:"P.devi",taluka:"Motala"},
  amount:"100"

 };

 var arr = [mydata3, mydata1,mydata2];

 var headerTemplate = "<thead> \
                        <tr id=\"color\"> \
                          <td>Package ID</td> \
                          <td>Delivery Date&Time</td> \
                          <td>Description</td> \
                          <td style=\"text-align:right;\">Amount(Rs.)</td> \
                        </tr> \
                      </thead>";
  var toReturn = "";
 
 var sum = 0;

 arr.forEach(function  (row) {
   toReturn += "<tr> \
                      <td>" + row.packageId + "</td> \
                      <td>" + row.delivery_date_time + "</td> \
                      <td>Name:<span style=\"color: #e6e6e6;\">" + row.description.name + " </span><br> \
                          Village:<span style=\"color: #e6e6e6;\">" + row.description.village + "</span>  <br> \
                          Taluka:<span style=\"color: #e6e6e6;\">" + row.description.taluka + "</span></td> \
                      <td style=\"text-align:right;\">" + row.amount + "</td> \
                    </tr> ";

   sum += Number(row.amount);                 
 });
  var template = "<tbody >"+toReturn+" </tbody>";
 var finalHTML = headerTemplate + template;
 document.getElementById("tableID").innerHTML = finalHTML;

// var order1=300;
// var order2=5000;
// var order3=100;
var QuickCash=3000;
 var TotalPayable=sum;
var BalancePayable=TotalPayable-QuickCash;
if (TotalPayable<QuickCash) 
  {
  	BalancePayable=0;
  }   
else
  {
   	BalancePayable=TotalPayable-QuickCash;
  };
document.getElementById("QuickCash").innerHTML= QuickCash;
// document.getElementById("order1").innerHTML= order1;
// document.getElementById("order2").innerHTML= order2;
// document.getElementById("order3").innerHTML= order3;
document.getElementById("TotalPayable").innerHTML= TotalPayable; 
document.getElementById("BalancePayable").innerHTML= BalancePayable;
// document.getElementById("packageId1").innerHTML= mydata1.packageId1;
// document.getElementById("delivery_date_time1").innerHTML= mydata1.delivery_date_time1;
// document.getElementById("description_name1").innerHTML=mydata1.description1.name;
// document.getElementById("description_village1").innerHTML=mydata1.description1.village;
// document.getElementById("description_taluka1").innerHTML=mydata1.description1.taluka;
// document.getElementById("packageId2").innerHTML= mydata2.packageId2;
// document.getElementById("delivery_date_time2").innerHTML= mydata2.delivery_date_time2;
// document.getElementById("description_name2").innerHTML=mydata2.description2.name;
// document.getElementById("description_village2").innerHTML=mydata2.description2.village;
// document.getElementById("description_taluka2").innerHTML=mydata2.description2.taluka;
// document.getElementById("packageId3").innerHTML= mydata3.packageId3;
// document.getElementById("delivery_date_time3").innerHTML= mydata3.delivery_date_time3;
// document.getElementById("description_name3").innerHTML=mydata3.description3.name;
// document.getElementById("description_village3").innerHTML=mydata3.description3.village;
// document.getElementById("description_taluka3").innerHTML=mydata3.description3.taluka;
// document.getElementById("arr").innerHTML=arr;
       