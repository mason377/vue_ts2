import Vue from "vue";
import Vuex from "vuex";

// const modules = require("./modules/data");

import modules from "./modules/data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    modules
  }
});
