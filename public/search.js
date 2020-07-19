$(document).ready(function () {
    //Search and filter functions
    const subjectSelection = $("#subjectSelection");
    const specialtySelection = $("#specialtySelection");

    //use for each within handlebars to generate
    function searchSpecialty() {
        if (specialtySelection.val === 1) {
            $.get("/api/search/1", function (req, res) {
                res.render("search", { Educator: res })

            })
        }
    }
    searchSpecialty();
});

