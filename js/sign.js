$(function() {

	 // sign up 
    $("#signup-submit").click(function() {
    	var myemail = $("#username").val();
    	var mypassword = $("#password").val();
    	console.log(email, password);

    	var ref = new Firebase("https://blinding-fire-5487.firebaseio.com/?page=Auth");
    	ref.createUser({
 			 email    :  myemail,
 			 password : mypassword
		}, function( error, userData ) {
  			if (error) {
    			// console.log("Error creating user:", error);
          alert("You did not enter your information correctly, please try again.");
  			} else {
    			// console.log("Successfully created user account with uid:", userData.uid);
          localStorage.setItem("Greeting", myemail);
          window.location.href="index.html";
  		}
		}); 
		return false;
	});

  // log in
  $("#login-submit").click(function() {
      var ref = new Firebase("https://blinding-fire-5487.firebaseio.com/?page=Auth");
      ref.auth("AUTH_TOKEN", function(error, result) {
        if (error) {
          console.log("Authentication Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", result.auth);
          console.log("Auth expires at:", new Date(result.expires * 1000));
          alert(myemail);
          localStorage.setItem("Greeting", myemail);
          window.location.href="index.html";
        }
      })
    return false;
    });


  //     ref.auth({
  //       email    : myemail, 
  //       password : mypassword
  //     }, function( error, userData ) {
  //       if (error) {
  //         // console.log("Error logging in user:", error);
  //         alert("You did not enter your information correctly, please try again.");
  //       } else {
  //         alert(myemail);
  //         localStorage.setItem("Greeting", myemail);
  //         window.location.href="index.html";
  //       }
  //     });
  //     return false;
  // });

  // logout
	$("#logout").click(function() {
		var ref = new Firebase("https://blinding-fire-5487.firebaseio.com/?page=Auth");
		ref.unauth();
		// window.location.href="index.html";
    $("#greeting").addClass("hidden");
	});
    
});