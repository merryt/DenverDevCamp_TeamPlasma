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
		console.log(e.which)
		if(e.which== 61){
			console.log("game time")
			$('.content').bPopup({
            content:'iframe', //'ajax', 'iframe' or 'image'
            contentContainer:'.content',
            loadUrl:'http://slither.io/' //Uses jQuery.load()
        });
                
			
		}
		//console.log(e.which)
	});
});

 