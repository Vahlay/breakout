import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerBarOffset: 0,
  },
  mutations: {
    setPlayerBarOffset(state, offset) {
      state.playerBarOffset = offset;
    },
    addPlayerBarOffset(state, offset) {
      state.playerBarOffset += offset;
    },
    removePlayerBarOffset(state, offset) {
      state.playerBarOffset -= offset;
    },
  },
  actions: {

  },
});
