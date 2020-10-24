const state = {
  NavOpen: false,
  BodyClass: '',
  BodyClassPageHome: 'p-transparent-menu txt-light',
  BodyClassPageNosChats: 'p-transparent-menu txt-dark',
  BodyClassPageNosChatsDetail: '',
  BodyClassPageActu: 'p-transparent-menu txt-light',
  BodyClassPageActuDetail: 'p-color-secundary-menu txt-dark p-article-detail',
  BodyClassPageHelp: 'p-transparent-menu txt-light',
  BodyClassPageContact: '',
};
const getters = {
  getNavOpenStateInStore: (state) => state.NavOpen,
  getBodyClassInStore: (state) => state.BodyClass,
  getBodyClassPageHomeInStore: (state) => state.BodyClassPageHome,
  getBodyClassPageNosChatsInStore: (state) => state.BodyClassPageNosChats,
  getBodyClassPageNosChatsDetailInStore: (state) =>
    state.BodyClassPageNosChatsDetail,
  getBodyClassPageActuInStore: (state) => state.BodyClassPageActu,
  getBodyClassPageActuDetailInStore: (state) => state.BodyClassPageActuDetail,
  getBodyClassPageHelpInStore: (state) => state.BodyClassPageHelp,
  getBodyClassPageContactInStore: (state) => state.BodyClassPageContact,
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
  SET_BODY_CLASS: (state, data) => {
    state.BodyClass = data;
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
  setBodyClassInStore: (store, data) => {
    store.commit('SET_BODY_CLASS', data);
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
