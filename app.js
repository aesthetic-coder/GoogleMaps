function initMap() {
    var options = {
        zoom: 4,
        center: {
            lat: 23.4241,
            lng: 53.8478
        }
    }

    var map = new google.maps.Map(document.getElementById('map'), options)
    var markers = [{
            coords: {
                lat: 10.8505,
                lng: 76.2711
            },
            content: '<p>Kerela</p>'
        },
        {
            coords: {
                lat: 25.2048,
                lng: 55.2708
            },
            content: '<p>Dubai</p>'
        },
        {
            coords: {
                lat: 21.4735,
                lng: 55.9754
            },
            content: '<p>Oman</p>'
        },
        {
            coords: {
                lat: 35.8617,
                lng: 104.1954
            },
            content: '<p>China</p>'
        },
    ]

    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i])
    }

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,

        })

        if (props.content) {
            var infowindow = new google.maps.InfoWindow({
                content: props.content
            })

            marker.addListener('click', function () {
                infowindow.open(map, marker)
            })
        }
    }
}