<template>
  <q-layout view="lHh Lpr lFf" id="main-layout">
    <leaflet-background></leaflet-background>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import LeafletBackground from 'components/LeafletBackground/Leaflet.vue'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    LeafletBackground
  },

  setup () {
    return {

    }
  }
})
</script>

<style scoped>
#main-layout{
  color: aliceblue;
}
</style>
