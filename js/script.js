/**
 * Created by FryderykG on 20.01.17.
 */
function toggleMenu() {
    var myTopnav = document.getElementById("myHeader");
    if (myTopnav.className === "row") {
        myTopnav.className += " responsive";
    } else {
        myTopnav.className = "row";
    }
}
// Close menu after click on wny link
function closeMenu() {
    var myTopnav = document.getElementById("myHeader");
    if (myTopnav.className === "row responsive") {
        myTopnav.className = "row";
    }
}
// jQuery functions
// Scroll certain amounts from current position
$(document).ready(function(){
    // Add smooth scrolling to all links
    $('a.menu').on('click', function(event) {
        // Check window width to calculate offset
        var width = $(window).width(),
            topOffset = 100;
        if (width <= 768){ topOffset = 0; }
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - topOffset
            }, 1000, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
        closeMenu();
    });
});

// EVENT HANDLERS
document.getElementById("toggleMenuIcon").addEventListener("click", toggleMenu);
