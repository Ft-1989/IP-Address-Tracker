$(document).ready(function(){
   var map = L.map('map').setView([37.38605, -122.08385], 13);
   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    zoomControl: 'false',
    accessToken: 'pk.eyJ1IjoidGVqMWMiLCJhIjoiY2wxcXl4dTJ5MDA0YzNrb3RiM3Y1MnYwMyJ9.tdiHGA-ISbTYFYP8zx9gLw'
    }).addTo(map);
    L.marker([37.38605, -122.08385]).addTo(map);
    map.removeControl(map.zoomControl);

    $('.btt').click(function(){
        var ip = $('#inputBox').val();
        var api_key = "at_ZXFFMSfWe0YMqbWSbUvUaZIeC4d2m";
        var lat, lng;
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: {apiKey: api_key, ipAddress: ip},
            success: function(data) {
                $(".ip").text(data.ip);
                $('.loc').text(data.location.region + ', ' + data.location.country);
                $(".tz").text('UTC ' + data.location.timezone);
                $(".isp").text(data.isp);
                console.log("<pre>"+ JSON.stringify(data,"",2)+"</pre>")
                lat = data.location.lat;
                lng = data.location.lng;
                map.remove();
                map = L.map('map').setView([lat, lng], 13);
                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoidGVqMWMiLCJhIjoiY2wxcXl4dTJ5MDA0YzNrb3RiM3Y1MnYwMyJ9.tdiHGA-ISbTYFYP8zx9gLw'
                }).addTo(map);
                L.marker([lat, lng]).addTo(map);
                map.removeControl(map.zoomControl);
            }
        });       
    });

});
