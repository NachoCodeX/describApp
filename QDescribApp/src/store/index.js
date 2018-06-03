import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import * as actions from './actions';
import * as getters from './getters';

import auth from './auth'


Vue.use(Vuex)

const store = new Vuex.Store({
  plugins:[createPersistedState()],
  modules: {
    auth
  },
  actions,
  getters
})

export default store
