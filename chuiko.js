function funcBeforew(){
$("#but").html("<img id='sse' src='1.gif'>");}
function funcSuccessw(data){
$("#but").html (data);}
$(document).ready(function() {
$("#but").bind("click",function(){
$.ajax({
url:"uniks.php",
type:"POST",
data:2017,
dataType:"html",
beforeSend:funcBeforew,
success:funcSuccessw});});});