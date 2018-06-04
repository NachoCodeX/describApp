// import something here
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
const URL = 'http://192.168.1.72:8000'
// const URL = 'http://192.168.1.168:8000'
// const URL = 'http://localhost:8000'

// leave the export, even if you don't use it
export default ({ store,app, router, Vue }) => {
  // something to do
  console.log(store);
  
  // const config={rejectUnauthorized:   false}
  Vue.use(VueSocketio,socketio(URL,{recconnection:true,reconnectionDelay:1000}),store);
}
