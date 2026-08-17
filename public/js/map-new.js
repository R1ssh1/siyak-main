

window.map = AmCharts.makeChart("chartdiv", {
    type: "map",
    "theme": "none",
    "projection":"miller",
    path: "",

    imagesSettings: {
        rollOverColor: "#089282",
        rollOverScale: 3,
        selectedScale: 3,
        selectedColor: "#089282",
        color: "#13564e"
    },

    areasSettings: {
        unlistedAreasColor: "#69c146"
    },

    dataProvider: {
        map: "worldLow",
        images: [{
            zoomLevel: 5,
            scale: 0.5,
            title: "Bahrain",
            latitude: 26.066700,
            longitude: 50.557700
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Canada",
            latitude: 56.130366,
            longitude: -106.346771
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "London",
            latitude:51.507351,
            longitude: -0.127758
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Spain",
            latitude: 40.463667,
            longitude: -3.749220
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "France",
            latitude: 46.227638,
            longitude: 2.213749
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Trinidad and Tobago",
            latitude: 10.691803,
            longitude: -61.222503
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Colombia",
            latitude: 4.570868,
            longitude: -74.297333
            
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Turky",
            latitude: 38.963745,
            longitude: 35.243322
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "India",
            latitude: 19.075984,
            longitude: 72.877656
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Egypt",
            latitude: 26.820553,
            longitude: 30.802498           
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Azerbaijan",
            latitude: 40.143105,
            longitude: 47.576927
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Jordan",
            latitude: 30.585164,
            longitude: 36.238414
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Saudi Arabia",
            latitude: 23.885942,
            longitude: 45.079162
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "USA",
            latitude: 37.090240,
            longitude:-95.712891
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "kuwait",
            latitude: 29.311660,
            longitude: 47.481766
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Qatar",
            latitude: 25.354826,
            longitude: 51.183884
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Oman",
            latitude: 21.512583,
            longitude: 55.923255
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "UAE",
            latitude: 23.424076,
            longitude: 53.847818
        },
         {
            zoomLevel: 5,
            scale: 0.5,
            title: "Thailand",
            latitude: 15.870032,
            longitude: 100.992541
        },
		{
            zoomLevel: 5,
            scale: 0.5,
            title: "Singapore",
            latitude: 1.352083,
            longitude: 103.819836
        }, 
         {
            zoomLevel: 5,
            scale: 0.5,
            title: "Vietnam",
            latitude: 14.058324,
            longitude: 108.277199
        },
		{
            zoomLevel: 5,
            scale: 0.5,
            title: "Sri Lanka",
            latitude: 7.873054,
            longitude: 80.771797
        }
                 
                
                ]
    }
});

// add events to recalculate map position when the map is moved or zoomed
map.addListener("positionChanged", updateCustomMarkers);

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers (event) {
    // get map object
    var map = event.chart;
    
    // go through all of the images
    for( var x in map.dataProvider.images) {
        // get MapImage object
        var image = map.dataProvider.images[x];
        
        // check if it has corresponding HTML element
        if ('undefined' == typeof image.externalElement)
            image.externalElement = createCustomMarker(image);

        // reposition the element accoridng to coordinates
        var xy = map.coordinatesToStageXY(image.longitude, image.latitude);
        image.externalElement.style.top = xy.y + 'px';
        image.externalElement.style.left = xy.x + 'px';
    }
}

// this function creates and returns a new marker element
function createCustomMarker(image) {
    // create holder
    var holder = document.createElement('div');
    holder.className = 'map-marker';
    holder.title = image.title;
    holder.style.position = 'absolute';
    
    // maybe add a link to it?
    if (undefined != image.url) {
        holder.onclick = function() {
            window.location.href = image.url;
        };
        holder.className += ' map-clickable';
    }
    
    // create dot
    var dot = document.createElement('div');
    dot.className = 'dot';
    holder.appendChild(dot);
    
    // create pulse
    var pulse = document.createElement('div');
    pulse.className = 'pulse';
    holder.appendChild(pulse);
    
    // append the marker to the map container
    image.chart.chartDiv.appendChild(holder);
    
    return holder;
}