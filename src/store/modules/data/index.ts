import Vue from "vue";
import Vuex from "vuex";
import { Commit, ActionContext } from "vuex";

Vue.use(Vuex);

const state = {
  platforms: ["111", "222"]
};

const getters = {
  getPlatforms: (state: any) => state.platforms
};

const mutations = {
  SET_PLATFORMS(state: any, payload: Array<any>) {
    state.platforms = payload;
  }
};

const actions = {
  async dispatchPlatforms(context: ActionContext<any, any>) {
    const res = await Vue.prototype.$api.getPlatforms();
    context.commit("SET_PLATFORMS", res.data);
  }
};

export default {
  namespaced: true, // 命名空间
  state,
  getters,
  mutations,
  actions
};
