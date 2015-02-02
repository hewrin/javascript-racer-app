$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them


	$(this).keyup(function(event) {

	$key = event.which;

		if ($key == 77) {
			$p1 = $("tr#player1_strip").children().filter(".active")
			$p1.removeClass("active")
			$p1.next().addClass("active")

			if ($(".active").is(':last-child')) {
				alert("Player 1 wins")
				$.post('/result');
			};


		};
		if ($key == 65) {
			$p2 =$("tr#player2_strip").children().filter(".active")
			$p2.removeClass("active")
			$p2.next().addClass("active")
	    };
	    	if ($(".active").is(':last-child')) {
				alert("Player 2 wins")
				$.post('/result');

			};

	});
});  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready
