var x=document.getElementById("markee");
// var myVar = setInterval(1000);
x.addEventListener("click",function(){
	x.style.display="none"
})
 $(document).ready(function () {          

            setTimeout(function() {
                $('#markee').remove();
            }, 11900);
});
 function myFunction() {
  var x = document.getElementById("searchbox");
  var currentVal = x.value;
  alert("Sorry, no results for '"+currentVal+"'. The database seems to be empty.")
}