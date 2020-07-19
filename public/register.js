$(document).ready(function () {
    const signUpForm = $("#registerButton");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");
    const firstNameInput = $("input#firstName-input");
    const lastNameInput = $("input#lastName-input");
    const bio = $("#bio")

  
    // When the signup button is clicked, we validate the email and password are not blank
    $("#registerButton").on("click", function(event) {
      event.preventDefault();
      console.log("you clicked me")
      const userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        first_name: firstNameInput.val().trim(),
        last_name: lastNameInput.val().trim(),
        bio: bio.val().trim()
      };
      console.log(userData)
  
    //   if (!userData.email || !userData.password) {
    //     return;
    //   }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password, userData.first_name, userData.last_name, userData.bio);
      emailInput.val("");
      passwordInput.val("");
      firstNameInput.val("");
      lastNameInput.val("");
      bio.val("")
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password, first_name, last_name, bio) {
      $.post("/api/register", {
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name,
        bio: bio
      })
        .then(function(data) {
          window.location.replace("/dashboard/" + data.id);
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
//Clicking Create Account sends post/create request to api-route
//Page redirects to dashboard with :id

//Clicking Create Account sends post/create request to api-route
//Page redirects to dashboard with :id

});