<template>
  <q-page>
    <q-page-container class="u-flex">
      <div> Permission Page </div>
      <button @click="getLocation">Get Location</button>
      <button @click="getCameraAccess">Get Camera Access</button>
      <div id="ownerVideo"></div>
    </q-page-container>
  </q-page>
</template>

<script>
export default{
  methods: {
    getLocation(){
      this.$store.dispatch('location/getLocation');
    },
    getCameraAccess(){
      this.$store.dispatch('camera/getCameraAccess');
    }
  }
}
</script>

<style scoped>
.u-flex{
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
}
</style>
