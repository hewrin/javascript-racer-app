$(document).ready(function() {
	
	$(this).keyup(function(event) {

	$key = event.which;

		if ($key == 77) {
			$p1 = $("tr#player1_strip").children().filter(".active")
			$p1.removeClass("active")
			$p1.next().addClass("active")

			if ($(".active").is(':last-child')) {
				alert("Player 1 wins")
			};


		};
		if ($key == 65) {
			$p2 =$("tr#player2_strip").children().filter(".active")
			$p2.removeClass("active")
			$p2.next().addClass("active")
	    };
	    	if ($(".active").is(':last-child')) {
				alert("Player 2 wins")
			};

	});
});