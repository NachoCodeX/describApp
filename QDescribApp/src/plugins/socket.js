// import something here
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  const config={rejectUnauthorized:   false}
  Vue.use(VueSocketio,socketio('http://localhost:8000',config));
}
