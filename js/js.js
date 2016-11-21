$(document).ready(function() {
    $('#fullpage').fullpage();

	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
			window.location.hash = hash;
			});
		} // End if
	});
     
});


var a = $(".fixed-nav").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('.fixed-nav').css({"background":"red"});
    } else {
       $('.fixed-nav').css({"background":"transparent"});
    }
});