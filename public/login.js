$(document).ready(function () {
    const loginButton = $("#loginButton2");
    // const emailInput = $("input#email-input");
    // const passwordInput = $("input#password-input");
    //Click on login takes you to dashboard/:id based on hard coded thing? Redirect not ajax call I think according to Kevin

    loginButton.on("click", function (event){
        event.preventDefault();
        console.log("You clicked me")
        window.location.replace("/dashboard")
    })
});