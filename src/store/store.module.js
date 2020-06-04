const state = {
  NavOpen: false,
};
const getters = {
  getNavOpenStateInStore: (state) => state.NavOpen,
};
const mutations = {
  TOGGLE_NAVOPEN: (state) => {
    state.NavOpen === true ? (state.NavOpen = false) : (state.NavOpen = true);
  },
  SET_TO_FALSE_NAVOPEN: (state) => {
    state.NavOpen = false;
  },
  SET_TO_TRUE_NAVOPEN: (state) => {
    state.NavOpen = true;
  },
};
const actions = {
  toggleNavOpenInStore: (store) => {
    store.commit('TOGGLE_NAVOPEN');
  },
  setToFalseNavOpenInStore: (store) => {
    store.commit('SET_TO_FALSE_NAVOPEN');
  },
  setToTrueNavOpenInStore: (store) => {
    store.commit('SET_TO_TRUE_NAVOPEN');
  },
};

export default {
  namespaced: true,
  strict: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
