$(document).ready(function () {
  //On click for login button
  const loginButton = $("#loginButton");
  const getStartedButton = $("#getStartedButton");

  loginButton.on("click", function () {
    console.log("Clicked login");
    window.location.replace("/login");
  });
  //On click for Get Started button
  getStartedButton.on("click", function () {
    console.log("Clicked Get Started");
    window.location.replace("/search");
  });
});
