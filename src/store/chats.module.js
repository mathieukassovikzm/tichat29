import dataChats from './data/chats.json';

const state = {
  listChats: [],
  countChats: 0,
};
const getters = {};
const mutations = {
  SETLISTCHATS: (state, data) => {
    state.listChats = data;
  },
};
const actions = {
  fetchListChats(store) {
    try {
      let data = dataChats;
      if (data) {
        let list = [];
        for (const [key, value] of Object.entries(data)) {
          let chat = {
            id: key,
            name: value.name,
            desc: value.description,
            photos: value.photos,
            adopt: value.adopte,
          };
          list.push(chat);
        }
        store.commit('SETLISTCHATS', list);
      }
    } catch (error) {
      console.log(error);
    }
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
