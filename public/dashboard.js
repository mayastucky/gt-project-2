$(document).ready(function () {
  //two views depending on view or update for dashboard
  const dashboardView = $(".dashboard-view");
  const dashboardView = $(".dashboard-update");

//Clicking on update account from first view will give you preloaded form


  //Update post function, somehow when you click "Save" the update will go to put route, and page reloads 
  function updatePost(Educator) {
    $.ajax({
      method: "PUT",
      url: "/api/dashboard/:id",
      data: Educator,
    }).then(function () {
      location.reload("/api/dashboard/:id").catch(handleLoginErr);
    });
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

//Delete account button, alert, then delete route with :id to 