document.addEventListener("DOMContentLoaded", init);

function init(event) {
    document.querySelector(".menu-icon").addEventListener("click", toggleMenu);

    function toggleMenu(event) {
        var menuIcon = document.querySelector(".menu-icon");
        var myElements = document.body.querySelectorAll(".menu li:not(.responsive)");
        
        if (menuIcon.classList.contains("clicked")) {
            menuIcon.classList.remove("clicked");
            for (var i = 0; i < myElements.length; i++) {
                myElements[i].style.display = "none";
            }
        } else {
            menuIcon.className += " clicked";            
            for (var i = 0; i < myElements.length; i++) {
                myElements[i].style.display = "block";
            }
        }
    }
}