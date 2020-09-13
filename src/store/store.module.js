const state = {
  NavOpen: false,
  BodyClass: '',
  BodyClassPageHome: 'p-home p-transparent-menu',
  BodyClassPageNosChats: 'p-nos-chats',
  BodyClassPageNosChatsDetail: 'p-nos-chats detail-chat',
  BodyClassPageActu: 'p-actu',
  BodyClassPageFamAcc: 'p-fam-acc',
  BodyClassPageContact: 'p-contact',
};
const getters = {
  getNavOpenStateInStore: (state) => state.NavOpen,
  getBodyClassInStore: (state) => state.BodyClass,
  getBodyClassPageHomeInStore: (state) => state.BodyClassPageHome,
  getBodyClassPageNosChatsInStore: (state) => state.BodyClassPageNosChats,
  getBodyClassPageNosChatsDetailInStore: (state) =>
    state.BodyClassPageNosChatsDetail,
  getBodyClassPageActuInStore: (state) => state.BodyClassPageActu,
  getBodyClassPageFamAccInStore: (state) => state.BodyClassPageFamAcc,
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
