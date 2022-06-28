
// State
const state = {
  access: false,
  ownStream: false,
  partnerStream: false
}

// Getter functions
const getters = {

}

// Actions
const actions = {
  async getCameraAccess(){

    const facingMode = "user";
    const constraints = {
      audio: true,
      video: {
        facingMode
      }
    };

    async function getMedia(constraints) {
      let stream = null;

      try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        /* use the stream */
        console.log("Success access");

        const video = document.getElementById("ownerVideo");
        video.setAttribute("playsinline", "");
        video.setAttribute("autoplay", "");
        video.setAttribute("muted", "");
        video.style.width = "200px";
        video.style.height = "200px";

        video.style.zIndex = "20";
        video.style.position = "absolute";

        video.srcObject = stream;

      } catch(err) {
        /* handle the error */
        console.error(err);
      }
    }

    await getMedia(constraints);

    console.log('getCameraAccess calling!');
  }
}
// Mutations
const mutations = {

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
