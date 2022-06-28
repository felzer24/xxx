
// State
const state = {
  currentLocation: [],
}

// Getter functions
const getters = {
  getCurrentLocation(state){
    return state.currentLocation;
  }
}

// Actions
const actions = {
  getLocation() {
    if (!navigator.geolocation) {
      console.error(`Your browser doesn't support Geolocation`);
    }else{
      console.info(`Your browser supports Geolocation`);

      navigator.geolocation.getCurrentPosition(onSuccess, onError);

      // handle success case
      function onSuccess(position) {
        const {
          latitude,
          longitude
        } = position.coords;

        console.log(`Your location: (${latitude},${longitude})`);
      }

      // handle error case
      function onError() {
        console.log(`Failed to get your location!`);
      }
    }
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
