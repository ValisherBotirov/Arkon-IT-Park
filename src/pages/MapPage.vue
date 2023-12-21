<template>
  <div class="relative z-10">
    <div class="w-screen h-[90vh]" ref="mapContainer" ></div>
  </div>

</template>

<script setup lang="ts">
import {onMounted, ref} from "vue"
import L from "leaflet"
import axios from "@/plugins/axios";

const mapContainer = ref("")

const map = ref()

const myIcon = L.icon({
  iconUrl: 'location.png',
  iconSize: [28, 45],
  popupAnchor: [-3, -76],
});

interface ILocation{
  icon?:string;
  name?:string;
  long:number;
  lat:number;
  brand?:number
}

const location = ref<ILocation[]>([
  {
    lat:41.2,
    long:69.281686
  },
  {
    lat:41.330981,
    long:69.312764
  }
])
function fetchMarkerLocation(){
  axios.get<ILocation[]>(`all-locations/`).then((res)=>{
    res.data.forEach((el)=>{
      const obj:ILocation = {
        lat:+el.lat,
        long:+el.long
      }
      location.value.push(obj)
    })
  })
}


onMounted(()=>{
  map.value = L.map(mapContainer.value).setView([41.311081, 69.240562], 11);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map.value);

  fetchMarkerLocation()

  setTimeout(()=>{
    console.log(location.value)
    location.value.forEach((el)=>{
      L.marker([el.lat, el.long]).addTo(map.value);
    })
  },200)

  const text = document.querySelector('.leaflet-control-attribution.leaflet-control')
  text.style.opacity = 0


})
</script>

<style scoped>
.leaflet-bottom.leaflet-right{
  display: none !important;
}
</style>
