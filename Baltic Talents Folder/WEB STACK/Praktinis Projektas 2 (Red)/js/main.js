(function($) {
    "use strict";
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });

})(jQuery);

function initMap(){
    var location = {lat: 40.762638, lng: -73.981470};
    var map = new google.maps.Map(document.getElementById('contact-us-map'), {
        zoom: 16,
        center: location,
        disableDefaultUI: true,
        styles: [
        {
            featureType: "all",
            elementType: "labels",
            stylers:
            [
                {
                    visibility: "off"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": "0"
                },
                {
                    "saturation": "0"
                },
                {
                    "color": "#f5f5f2"
                },
                {
                    "gamma": "1"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "-3"
                },
                {
                    "gamma": "1.00"
                }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#bae5ce"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fac9a9"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#4e4e4e"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#787878"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.station.airport",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "hue": "#0a00ff"
                },
                {
                    "saturation": "-77"
                },
                {
                    "gamma": "0.57"
                },
                {
                    "lightness": "0"
                }
            ]
        },
        {
            "featureType": "transit.station.rail",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#43321e"
                }
            ]
        },
        {
            "featureType": "transit.station.rail",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "hue": "#ff6c00"
                },
                {
                    "lightness": "4"
                },
                {
                    "gamma": "0.75"
                },
                {
                    "saturation": "-68"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#eaf6f8"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#c7eced"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "lightness": "-49"
                },
                {
                    "saturation": "-53"
                },
                {
                    "gamma": "0.79"
                }
            ]
        }
    ]
    });
    var marker =  new google.maps.Marker({
        position: location,
        map: map,
        title: 'Our main office',
        icon: 'img/map-marker.png'
    });
}
