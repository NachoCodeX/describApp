// import something here
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
const HOST = 'http://192.168.1.72:8000'
// const HOST = 'http://localhost:8000'

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  // const config={rejectUnauthorized:   false}
  Vue.use(VueSocketio,socketio(`http://192.168.1.72:8000`));
}
