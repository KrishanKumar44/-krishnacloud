// Krishna Cloud v2.0

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function () {

    let filter = searchBox.value.toLowerCase();

    let questions = document.querySelectorAll(".question");

    questions.forEach(function (item) {

        let text = item.innerText.toLowerCase();

        if (text.indexOf(filter) > -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });

});


// Smooth Scroll

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        alert("Section Coming Soon 🚀");

    });

});