import { createStore } from "vuex";
const axios = require("axios");

export default createStore({
  state: {
    //estados de la aplicacion
    user: {
      name: null,
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
      state.auth = Boolean(payload);
    },
  },
  actions: {
    //Invocan mutations => Peticiones y commit a mutation
    async login({ commit }, credentials) {
      const response = await axios.post(
        "http://localhost:8081/api/login",
        credentials
      );

      console.log("RESPONSE: ", response.data);
      commit("setUser", response.data);

      return response;
    },
    setUser(context, username){
      console.log(username)
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
});
