$(document).ready(function () {
  //Search and filter functions
  const subjectSelection = $("#subjectSelection");
  const specialtySelection = $("#specialtySelection");
  const searchButton = $("#searchButton");

  //Event listener for Search Button
  searchButton.on("click", searchSpecialty);

  //use for each within handlebars to generate
  function searchSpecialty(event) {
    event.preventDefault();
    //if ( === 1) {
    window.location.replace("/search/" + specialtySelection.val());
    //$.get("/search/" + specialtySelection.val(), function (err, data) {
    // console.log(err);
    // });
    //}
  }
});
