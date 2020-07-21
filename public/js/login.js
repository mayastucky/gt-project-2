$(document).ready(function () {
  const loginButton = $("#loginButton2");
  // const emailInput = $("input#email-input");
  // const passwordInput = $("input#password-input");
  //Click on login takes you to dashboard/:id based on hard coded thing? Redirect not ajax call I think according to Kevin
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  loginButton.on("click", function (event) {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };
    // console.log(userData);

    if (!userData.email || !userData.password) {
      return alert("This password or email is incorrect.");
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password,
    })
      .then(function (data) {
        window.location.replace("/dashboard/" + data.id);
        // If there's an error, log the error 
      })
      .catch(function (err) {  
        console.log(err);
      });
  }
});
// loginButton.on("click", function (event){
//     event.preventDefault();
//     console.log("You clicked me")
//     window.location.replace("/dashboard")
// })
