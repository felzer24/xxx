<template>
  <q-page class="flex flex-center">

    <div class="select card" @click="routeToVideoChat()">
      <img src="../assets/videocall.png">
      <div class="card-text"> Start video chat with random people</div>
    </div>
    <h5> OR </h5>
    <div class="select card"  @click="checkCamera()">
      <img src="../assets/bubble-chat.png">
      <div class="card-text"> Start just chatting with random people</div>
    </div>

    <div id="ownerVideo">

    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
// #F9F9F9
export default defineComponent({
  name: 'PageIndex',
  methods: {
    routeToTypeChat(){

    },
    async routeToVideoChat(){
      await this.$store.dispatch('camera/getCameraAccess');
    },

  },
  mounted() {

  }
})
</script>

<style scoped>
.card{
  background-color: rgba(56, 58, 61, 0.88);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 15px;
  border-radius: 10px;
  place-items: center;
  margin: 10px;
}

.card img{
  height: 55px;
  width: 55px;
  margin: 0 auto;
}

.card div{
  margin-top: 10px;
}

.card:hover{
  cursor: pointer;
  background-color: #313436;
}
</style>
