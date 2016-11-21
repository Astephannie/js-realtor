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
    
    $(window).scroll(function() {
    if ($(".bottom-content").offset().top > 50) {
        $("#fixed-nav").attr("style", "background-color:#231f20");
        $(".brand-nav").attr("style", "display:block");
    } else {
        $("#fixed-nav").attr("style", "background-color:transparent");
        $(".brand-nav").attr("style", "display:none");
    }   
});

});




