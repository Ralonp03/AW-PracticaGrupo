import { createStore } from "vuex";
import  createPersistedState  from  'vuex-persistedstate'
const axios = require("axios");

export default createStore({
  state: {
    //estado de la aplicacion
    username: null,
    auth: false,
    role: ''
  },
  mutations: {
    // Actualizan los estados
    setUser(state, payload) {
      state.username = payload.name;
      state.role = payload.role
      state.auth = Boolean(payload);
    },
    logout(state){
     
        state.username = null
        state.auth = false 
     
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
      setTimeout(() => {
        commit('logout')
      }, 30000);
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
    getUserAuth: (state) => {
      return state.auth;
    },
    getUserRole: (state) => {
      return state.role;
    },
  },
  plugins: [createPersistedState()]
});
