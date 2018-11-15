import * as types from "./mutation-types";

const mutations = {
  [types.SET_LANGUAGE](state, Language) {
    state.language = Language;
  },
  [types.THIS_LANGUAG](state, index) {
    state.thislang = state.language[index];
  }
};

export default mutations;
