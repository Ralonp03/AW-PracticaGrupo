import { createStore } from "vuex";
import  createPersistedState  from  'vuex-persistedstate'
const axios = require("axios");

export default createStore({
  state: {
    //estado de la aplicacion
    username: '',
    auth: false,
  },
  mutations: {
    // Actualizan los estados
    setUser(state, payload) {
      state.username = payload.name;
      state.auth = Boolean(payload);
    },
    logout(state){
      state.auth = false //Persistir durante 30'
      //Borrar token de localStorage
    }
  },
  actions: {
    //Invocan mutations => Peticiones y commit a mutation
    async register({dispatch} , credentials) {
      const response = await axios.post( "http://localhost:8081/api/register",
      credentials)
      dispatch('setUser', response.data)
      return response
    },
    
    async login({ dispatch }, credentials) {
      const response = await axios.post(
        "http://localhost:8081/api/login",
        credentials
      );

      dispatch('setUser', response.data)
      return response;
    },
    logout({ commit }){
      commit('logout')
    },
    setUser({ commit }, username){
      commit('setUser', username)
    },
  },
  modules: {},
  getters: {
    getUserName: (state) => {
      return state.username;
    },
  },
  plugins: [createPersistedState()]
});
