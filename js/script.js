/**
 * Created by FryderykG on 20.01.17.
 */

function toggleMenu() {
    window.console.log('click');
    var myTopnav = document.getElementById("myTopnav");
    if (myTopnav.className === "topnav") {
        myTopnav.className += " responsive";
    } else {
        myTopnav.className = "topnav";
    }
}