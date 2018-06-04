// import something here
import 'vue-googlemaps/dist/vue-googlemaps.css'
import VueGoogleMaps from 'vue-googlemaps'

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  Vue.use(VueGoogleMaps, {
    load: {
      // Google API key
      apiKey: 'AIzaSyDVOpXGsiqSy7q2IHT7dF2hkSRlkPLnPC4',
      // Enable more Google Maps libraries here
      libraries: ['places'],
      // Use new renderer
      useBetaRenderer: false,
    },
  })
}
