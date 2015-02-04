$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
   position_1 = 0;
   position_2 = 0;

	$(this).keyup(function(event) {
	

	$key = event.which;
		

		if ($key == 77) {
			$p1 = $("tr#player1_strip").children().filter(".active")
			$p1.removeClass("active")
			$p1.next().addClass("active")
			position_1 += 1
			
			if (position_1 > 10) {
				alert("Win")
				
				var result = $.ajax({
					type: 'post',
					url: '/result',
					dataType: 'json',
					data: {winner :'Player 1'}
      			})

      			result.done(function(message){
      				window.location.href ='/result?winner=' + message["msg"]
      			});
      	    };
		};			

		if ($key == 65) {
			$p2 =$("tr#player2_strip").children().filter(".active")
			$p2.removeClass("active")
			$p2.next().addClass("active")
			position_2 += 1
	    };
	    	if (position_2 > 10) {
				alert("Win")

				var finish = $.ajax({
					type: 'post',
					url: '/result',
					dataType: 'json',
					data: {winner: 'Player 2'}
      			});
      			   finish.success(function(message){
      			   	window.location.href = '/result?winner=' + message["msg"]
      			   });

			};

	});
});  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready
