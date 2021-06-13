import { createStore } from "vuex";
import  createPersistedState  from  'vuex-persistedstate'
const axios = require("axios");

export default createStore({
  state: {
    //estados de la aplicacion
    user: {
      name: '',
      collections: [],
      cards: [],
      role: "",
      points: 0,
    },
    auth: false,
  },
  mutations: {
    // Actualizan los estados
    setUser(state, payload) {
      state.user.name = payload.name;
      state.user.points = payload.points;
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
    setUser(context, username){
      context.commit('setUser', username)
    }
  },
  modules: {},
  getters: {
    getUserName: (state) => {
      return state.user.name;
    },
    getUserPoints: (state) => {
      return state.user.points;
    },
  },
  plugins: [createPersistedState()]
});
