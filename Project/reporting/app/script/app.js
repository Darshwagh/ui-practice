var report = [
               {reportname:"Deposit History", url:"http://agroex.agrostar.in/report/deposit_history.csv"},
               {reportname:"AllPackagesReport", url:"http://agroex.agrostar.in/report/AllPackagesReport.csv"},
               {reportname:"Incentive Report", url:"http://agroex.agrostar.in/report/AllPackagesReport.csv"},
               {reportname:"Incentive Snapshot", url:"http://agroex.agrostar.in/report/incentive_snapshot.csv"},
               {reportname:"Quickcash Snapshot", url:"http://agroex.agrostar.in/report/quickcash_snapshot.csv"},
               {reportname:"Returnpackage Report", url:"http://agroex.agrostar.in/report/returnpackage-report.csv"},
               {reportname:"Report/Vpm Report", url:"http://agroex.agrostar.in/report/vpm_report.csv"},
               {reportname:"Google.com", url:"http://www.google.com"},
             ];
  // display data select tag           
var rLen=report.length;            
var reportOption="<option value='0'>select</option>";
     for (i = 0; i <rLen; i++) {
	     reportOption+="<option value='"+report[i]['url']+"'>"+report[i]['reportname']+"</option>"
	   };
document.getElementById("selected-report").innerHTML = reportOption;
// downloads report
$('#selected-report').change(function () {
    var optionSelected = $(this).find("option:selected");
    var valueSelected  = optionSelected.val();
    $('#mya').attr('href',valueSelected);
    
});
// display select report url in console
$("#btn-info").click(function () {
    console.log("URL:" + $("#mya").attr('href'));
});




