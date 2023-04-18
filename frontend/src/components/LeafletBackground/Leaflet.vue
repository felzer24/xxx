<template>
    <div>
        <div id="mapContainer"></div>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
    data(){
        return{
            center: [51.51427, 7.46319],
            test:"hello"
        }
    },
    methods:{
        setupLeafletMap: function () {
            const mapDiv = L.map("mapContainer").setView(this.center, 4);
                L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                    subdomains: 'abcd',
                    minZoom: 4,
                    maxZoom: 4,
                    drag:false,
                    //id: "mapbox/streets-v11",
                    accessToken:"pk.eyJ1IjoidWd1cjQ0ZG8iLCJhIjoiY2w0eTE4Z2Q5MW5qNDNlcGhqdGIzYWw1YSJ9.hPlCpu8a0ByrESRZMSjJzA",
                }
            ).addTo(mapDiv);
            mapDiv.dragging.disable();
            mapDiv.scrollWheelZoom.disable();

            var marker = new L.marker([51.51427, 7.46319],
            {
                icon: new L.Icon({
                    iconUrl: require('./swab.png'),
                    iconSize: [35, 35],
                    //className: 'my-div-icon',
                })
            });

            //marker.addTo(mapDiv);

            var newpopup = L.popup({ closeOnClick: false, className: 'cleaflet-popup' })
            .setContent('<span style="font-size:18px;font-family: Fjalla One;font-weight:500;">TESTPOINT | Nazar Skin Consultancy</span> <br> (Seiteneingang über Vodafone) <br> Westenhellweg 52 <br> 44137 Dortmund ');

            //marker.bindPopup(newpopup).openPopup();

            var lc = document.querySelectorAll('.leaflet-control a');
            var banner = document.querySelector('.leaflet-control-attribution');
            var storeBanner = lc[2];
            banner.innerHTML = storeBanner.outerHTML;

        },
    },
    mounted(){
        this.setupLeafletMap();

        document.querySelector('.leaflet-bottom.leaflet-right').style['display'] = "none";
    }
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');

#mapContainer {
    position: fixed;
    left: 0;
    right: 0;

    z-index: -10 !important;
    width: 100%;
    height: 100vh;
}

.map-title{
    text-transform: uppercase; font-weight: 300; font-size: 28px; font-family: 'Poppins', sans-serif;
    display: flex; justify-content: center; place-items: center; color: rgb(90, 90, 90);
    margin: 25px; padding-top: 25px;
}
.leaflet-container { z-index:10 !important;}

.my-div-icon{
    height: 150px;
    width: 150px;
    background-color: tomato;
    background: red;
    text-align: center;
}
/* css to customize Leaflet default styles  */
.popupCustom .leaflet-popup-tip,


.cleaflet-popup{
    font-size: 26px;
    background: violet;
}
#myleaflet-popup{
    font-size: 29px;
    font-weight: 700;
}
</style>

<style>

.leaflet-popup-content-wrapper {
    /* background: #be5858; */
    color: #234c5e;
    border-radius: 2px !important;
}
</style>
