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
  const saveBtn = $("#saveButton");
  let specialtyInputVal = '';

  $("#specialty-input").change(function () {
    return specialtyInputVal = $("#updateSpecialtyInput option:selected").val();
});

//Original On Click for Delete
  // $(deleteBtn).on("click", deleteEducator);

  $(deleteBtn).on("click", function(){
    const currentEducator = $(this).data("edid");
    console.log(currentEducator);
    let confirmation= confirm("Are you sure you want to delete your account?");
    if (confirmation===true){
      deleteEducator(currentEducator);
    }
  });

  $(saveBtn).on("click", updateEducator);

  switchDisplay("currentInformation");
  //Clicking on update account from first view will give you preloaded form
  updateBtn.on("click", function (event) {
    event.preventDefault();
    switchDisplay("updateInformation");
  });


  // Update: What Educator to Update
  function updateEducator() {
    console.log("Save Clicked");
    const currentEducator = $(this).data("edid");
    updateAccount(currentEducator);
  }
  
  //Update educator function after having ID, reloads page.
  function updateAccount(id) {
    console.log(id);
    const updateData = {
      id,
      first_name: updateFirstNameInput.val().trim(),
      last_name: updateLastNameInput .val().trim(),
      bio: updateBioInput.val().trim(),
      // SpecialityId: parseInt(specialtyInputVal)
    };
    $.ajax({
      method: "PUT",
      url: "/api/dashboard/" +id,
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

//
// Delete: What Educator to Delete
  function deleteEducator(currentEducator) {
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







