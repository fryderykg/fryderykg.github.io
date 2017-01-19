/**
 * Created by frycek on 04.01.17.
 */
$(document).ready(function() {
    $('#fullpage').fullpage({
//                sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#666'],
        anchors: ['home', 'work', 'about', 'contact'],
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
//                navigationTooltips: ['Home', 'Work', 'About', 'Contact'],
        responsiveWidth: 991
    });
});