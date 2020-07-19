$(document).ready(function () {
    //Search and filter functions
    const subjectSelection = $("#subjectSelection");
    const specialtySelection = $("#specialtySelection");

    //use for each within handlebars to generate
    function searchSubject(subject) {
        if (subjectSelection.val === 1) {
            $.get("/search", function (req, res) {
                res.render("/search", { Educator: res })

            })
        }
    }
    searchSubject();
});

