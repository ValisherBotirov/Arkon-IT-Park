<template>
  <div class="relative z-10">
    <div class="w-screen h-[90vh]" id="map"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import axios from "@/plugins/axios";

declare global {
  interface Window {
    initMap: () => void;
  }
}

const location = ref<ILocation[]>([]);

interface ILocation {
  icon?: string;
  name?: string;
  long: number;
  lat: number;
  brand?: number;
}

let map: google.maps.Map;

async function fetchMarkerLocation() {
  try {
    const response = await axios.get<ILocation[]>(`all-locations/`);
    location.value = response.data;
    addMarkersToMap();
  } catch (err) {
    console.log(err);
  }
}

function addMarkersToMap() {
  location.value.forEach((el) => {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(el.lat, el.long),
      map: map,
      icon: el.icon,
    });

    const contentString = '<a href="/home?id=' + el.brand + '">...</a>'; // Adjust your popup content here
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  });
}

window.initMap = () => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.311081, lng: 69.240562 },
    zoom: 11,
  });
  fetchMarkerLocation();
};

onMounted(() => {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
  script.async = true;
  document.head.appendChild(script);
});
</script>

<style scoped>
#map {
  border: 1px solid #ccc;
  border-radius: 8px;
  /* Other styles as needed */
}
</style>
