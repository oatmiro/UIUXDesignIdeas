
function toggleTheme() {
    var element = document.body;
    element.classList.toggle("darkMode");

    document.querySelectorAll(".generateButton").forEach(btn => {
        btn.classList.toggle("darkMode");
    });

 }