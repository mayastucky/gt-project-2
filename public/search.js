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



// app.get("/", function(req, res) {
//     connection.query("SELECT * FROM wishes;", function(err, data) {
//       if (err) {
//         throw err;
//       }

//       // Test it.
//       // console.log('The solution is: ', data);

//       // Test it.
//       // res.send(data);

//       res.render("index", { wishes: data });
//     });
//   });

// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
// }