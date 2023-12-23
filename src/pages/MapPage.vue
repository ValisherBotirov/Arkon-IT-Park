<template>
  <div class="relative z-10">
    <div class="w-screen h-[90vh]" ref="mapContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import L from "leaflet";
import axios from "@/plugins/axios";

const mapContainer = ref("");

const map = ref();

const myIcon = L.icon({
  iconUrl: "location.png",
  iconSize: [28, 45],
  popupAnchor: [-3, -76],
});

interface ILocation {
  icon?: string;
  name?: string;
  long: number;
  lat: number;
  brand?: number;
}

const location = ref<ILocation[]>([
  {
    lat: 41.23,
    long: 69.281686,
    icon:'https://api.arkon.uz/media/brands/icons/orient-slider-bg0.jpg',
    name:'ORIENT Business Center',
    brand:11
  },
  {
    lat: 41.330981,
    long: 69.312764,
    icon:'https://api.arkon.uz/media/brands/icons/orient-slider-bg0.jpg',
    name:'Alim Maratovich',
    brand:12
  },
]);
async function fetchMarkerLocation() {
  try {
    const response = await axios.get<ILocation[]>(`all-locations/`)
    clearMarkers()
    // location.value = response.data
    response.data.forEach((el) => {
      const obj: ILocation = {
        lat: +el.lat,
        long: +el.long,
        name:el.name,
        icon:el.icon,
        brand:el.brand
      };
      location.value.push(obj);
    });
    addMarkersToMap()
  }
  catch (err){
    console.log(err)
  }

}

function clearMarkers() {
  map.value.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.value.removeLayer(layer);
    }
  });
}

function addMarkersToMap(){
    console.log(location.value);
    location.value.forEach((el) => {
      console.log(el)
      L.marker([el.lat, el.long]).addTo(map.value).bindPopup('<img src="'+el.icon+'" class="w-[50px] h-[50px] object-cover rounded-[50%]"> <p class="font-medium min-w-[130px]"> ' + el.name + '</p>  <a href="/home?id='+el.brand+'" class="inline-block !text-sm">Ko`rish</a>')
    });


}

onMounted(async () => {
  map.value = L.map(mapContainer.value).setView([41.311081, 69.240562], 11);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">Arkon</a>',
  }).addTo(map.value);

  await fetchMarkerLocation();

  const text = document.querySelector(
    ".leaflet-control-attribution.leaflet-control"
  );
  text.style.opacity = 0;
});
</script>

<style scoped>
.leaflet-bottom.leaflet-right {
  display: none !important;
}
</style>
