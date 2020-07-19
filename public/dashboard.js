$(document).ready(function () {
  //two views depending on view or update for dashboard
  const dashboardView = $(".dashboard-view");
  const dashboardUpdate = $(".dashboard-update");
  const updateInfo = $("#updateInformation");
  const updateBtn = $("#updateButton");
  const deleteBtn = $("#deleteButton")

  switchDisplay("currentInformation");
  //Clicking on update account from first view will give you preloaded form
  updateBtn.on("click", function (even) {
    event.preventDefault();
    switchDisplay("updateInformation");
  });

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

  function switchDisplay(toDisplay) {
    if (toDisplay === "currentInformation") {
      $("#currentInformation").attr("style", "display: block;");
      $("#updateInformation").attr("style", "display: none;");
    } else if (toDisplay === "updateInformation") {
      $("#currentInformation").attr("style", "display: none;");
      $("#updateInformation").attr("style", "display: block;");
    }
  }


  //Delete account button, alert, then delete route with :id to
  deleteBtn.on("click", deleteAccount());

  function deleteAccount(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/dashboard/" + id,
    })
      .then(function () {
        window.location.replace("/");
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }


});
