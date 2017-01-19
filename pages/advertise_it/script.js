/**
 * Created by frycek on 28.12.16.
 */
function toggleMenu() {
    var myTopnav = document.getElementById("myTopnav");
    if (myTopnav.className === "topnav") {
        myTopnav.className += " responsive";
    } else {
        myTopnav.className = "topnav";
    }
}