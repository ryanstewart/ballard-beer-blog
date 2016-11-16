var badJimmys = ["Bad Jimmy's",,,]
var hales = ["Hale's Ales",47.65922,-122.365603,"../images/hales-logo-75x75.png"];
var hilliards = ["Hilliard's Beer",47.66454,-122.377946,"../images/hilliards-logo-75x75.png"];
var maritime = ["Maritime Pacific Brewing",47.662692,-122.371573,"../images/maritime-logo-75x75.png"];
var nwPeaks = ["NW Peaks Brewery",47.664828,-122.378601,"../images/nw-peaks-logo-75x75.png"];
var peddler = ["Peddler Brewing Company",47.663896,-122.377091,"../images/peddler-logo-75x75.png"];
var populuxe = ["Populuxe Brewing",47.664583,-122.367549,"../images/populuxe-logo-75x75.png"];
var reubens = ["Reuben's Brews",47.667386,-122.374099,"../images/reubens-logo-75x75.png"];
var stoup = ["Stoup Brewing",47.666653,-122.371202,"../images/stoup-logo-75x75.png"];
var breweries = [hales, maritime, nwPeaks, peddler, populuxe, reubens, stoup];

var markerArray = [];

var frelardCrawl = [hales,maritime,populuxe];
var industrialCrawl = [maritime,populuxe,reubens,stoup];
var oldBallardCrawl = [nwPeaks,peddler];

var mapStyle = [{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#84afa3"},{"lightness":52}]},{"stylers":[{"saturation":-17},{"gamma":0.36}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#3f518c"}]}]

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(47.6655,-122.375),
        styles: mapStyle,
        zoom: 15
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
    setMarkers(map, breweries);
    document.getElementById("fullCrawl").addEventListener("click",function(e){
        e.preventDefault();
        clearMarkers();
        setMarkers(map, breweries);
    });
    document.getElementById("frelardCrawl").addEventListener("click",function(e){
        e.preventDefault();
        clearMarkers();
        setMarkers(map, frelardCrawl);
    });
    document.getElementById("industrialCrawl").addEventListener("click",function(e){
        e.preventDefault();
        clearMarkers();
        setMarkers(map, industrialCrawl);
    });
    document.getElementById("oldBallardCrawl").addEventListener("click",function(e){
        e.preventDefault();
        clearMarkers();
        setMarkers(map, oldBallardCrawl);
    });
}

function setMarkers(map, locations) {
    for (var i = 0; i < locations.length; i++) {
        var brewery = locations[i];
        var myLatLng = new google.maps.LatLng(brewery[1], brewery[2]);
        var image = {
            url: brewery[3],
            size: new google.maps.Size(75, 75)
            // origin: new google.maps.Point(0,0),
            // anchor: new google.maps.Point(0, 0)
        };
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image,
            // shape: shape,
            title: brewery[0],
            animation: google.maps.Animation.DROP
        });
        markerArray.push(marker);
    }
}

function clearMarkers() {
    for(var i = 0; i < markerArray.length; i++) {
        markerArray[i].setMap(null);
    }
    markerArray.length = 0;
}


google.maps.event.addDomListener(window, 'load', initialize);




