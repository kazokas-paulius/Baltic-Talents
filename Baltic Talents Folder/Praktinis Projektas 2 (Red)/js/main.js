(function($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });

})(jQuery);

function initMap(){
    var location = {lat: 40.762638, lng: -73.981470};
    var map = new google.maps.Map(document.getElementById('contact-us-map'), {
        zoom: 4,
        center: location
    });
}
