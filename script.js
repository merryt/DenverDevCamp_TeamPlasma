$(".moreinfo").hide() 


$(".moremediabutton").click(function(){
	$(".moreinfo").hide() 
	$("#mediamore").show(500)
	window.scrollTo(0,1000)
})

$(".aboutbutton").click(function(){
	$(".moreinfo").hide() 
	$("#Aboutmore").show(500)
	window.scrollTo(0,1000)
})
$( document ).ready(function() {
	$(document).keypress(function(e){
		if(e.which== 99){
			console.log("game time")
		}
		//console.log(e.which)
	});
});