$(document).ready(function () {
  //two views depending on view or update for dashboard
  const dashboardView = $(".dashboard-view");
  const dashboardUpdate = $(".dashboard-update");
  const updateInfo = $("#updateInformation");
  const updateBtn = $("#updateButton");
  const deleteBtn = $("#deleteButton");
  const updateFirstNameInput = $("#updateFirstNameInput");
  const updateLastNameInput = $("#updateLastNameInput");
  const updateBioInput = $("#updateBioInput");
  const specialtyInputVal;

  $("#specialty-input").change(function () {
    return specialtyInputVal = $("#updateSpecialtyInput option:selected").val();
});

  $(deleteBtn).on("click", deleteEducator);


  switchDisplay("currentInformation");
  //Clicking on update account from first view will give you preloaded form
  updateBtn.on("click", function (even) {
    event.preventDefault();
    switchDisplay("updateInformation");
  });


  //Update educator function, somehow when you click "Save" the update will go to put route, and page reloads
  function updateEducator() {
    const updateData = {
      first_name: updateFirstNameInput.val().trim(),
      last_name: updateLastNameInput .val().trim(),
      bio: updateBioInput.val().trim(),
      SpecialityId: parseInt(specialtyInputVal)
    };
    console.log(udpateData)
    $.ajax({
      method: "PUT",
      url: "/api/dashboard/:id",
      data: updateData,
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

//HOW CAN WE GET THE CLICK TO RECOGNIZE THE ID IN URL???? if we did not have undefined as id it would work
// Delete: What Educator to Delete
  function deleteEducator() {
    console.log("Delete Clicked");
    const currentEducator = $(this).data("edid");
  
    deleteAccount(currentEducator);
  }
  

// Delete: Actual Delete function
  function deleteAccount(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/dashboard/delete/" + id
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


//End ready
});







