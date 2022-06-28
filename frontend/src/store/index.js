import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// Module imports
import locationModule from './modules/LocationModule.store'
import cameraModule from './modules/CameraModule.store'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      // example
      location: locationModule,
      camera: cameraModule
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
