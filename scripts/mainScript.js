//JavaScript Document

$(document).ready(function() {
 $('#signup').validate({
   rules: {
     email: {
        required: true,
        email: true
     },
   },
   messages: {
      email: {
         required: "Please supply an e-mail address.",
         email: "This is not a valid email address."
   },
  },
   errorPlacement: function(error, element) { 
       if ( element.is(":radio") || element.is(":checkbox")) {
          error.appendTo( element.parent()); 
        } else {
          error.insertAfter(element);
		}
  }
   });
 });
function openFunction() {
    		var x = document.getElementById("subNav");
			var y = document.getElementById("hamOpen")
			var z = document.getElementById("hamClosed")
    		if (x.style.display === "none") {
        		x.style.display = "block";
    		} else {
        		x.style.display = "none";
    		}
		
			if (y.style.display === "none") {
        		z.style.display = "none";
				y.style.display = "block";
    		} else {
        		y.style.display = "none";
    		}
		}

		function closeFunction() {
    		var x = document.getElementById("subNav");
			var y = document.getElementById("hamOpen")
			var z = document.getElementById("hamClosed")
    		if (z.style.display === "none") {
        		z.style.display = "block";
    		} else {
        		z.style.display = "none";
    		}
		
			if (z.style.display === "block") {
        		y.style.display = "none";
				x.style.display = "none"
    		} else {
        		z.style.display = "none";
    		}
		}