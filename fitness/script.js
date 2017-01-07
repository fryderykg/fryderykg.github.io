/**
 * Created by frycek on 04.01.17.
 */
// Scroll certain amounts from current position
$(document).ready(function(){
    // Add smooth scrolling to all links
    $('a.menu').on('click', function(event) {
    // $('a:not([data-toggle="tab"])').on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top -50
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
        $('button#nav-bar-button:not(:hidden)').click();
    });

    $(window).scroll(function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 150;

        if(y_scroll_pos > scroll_pos_test) {
            $(".navbar").css("background","rgba(0, 0, 0, 0.8)");
        }
        else
        {
            $(".navbar").css("background","transparent");
        }
    });
});