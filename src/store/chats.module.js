import dataChats from './data/chats.json';

const state = {
  listChats: [],
  nbChatAdoptes: 0,
  nbChatsDisponibles: 0,
};
const getters = {
  getListChatsInStore: (state) => {
    return state.listChats;
  },
  getNbChatAdoptesInStore: (state) => {
    return state.nbChatAdoptes;
  },
  getNbChatsDisponiblesInStore: (state) => {
    return state.nbChatsDisponibles;
  },
};
const mutations = {
  SETLISTCHATS: (state, data) => {
    state.listChats = data;
  },
  SETNBCHATSADOPTES: (state, data) => {
    state.nbChatAdoptes = data;
  },
  SETNBCHATSDISPONIBLES: (state, data) => {
    state.nbChatsDisponibles = data;
  },
};
const actions = {
  fetchInfosChatsInStore(store) {
    try {
      let data = dataChats;
      if (data) {
        let list = [];
        for (const [key, value] of Object.entries(data)) {
          if (key == 'nbChatsAdoptes') {
            store.commit('SETNBCHATSADOPTES', value);
          }
          if (key == 'nbChatsDisponibles') {
            store.commit('SETNBCHATSDISPONIBLES', value);
          }
          if (key == 'chats') {
            for (var objChat of value) {
              let chat = {
                nom: objChat.nom,
                desc: objChat.description,
                photos: objChat.photos,
                adopt: objChat.adopte,
              };
              list.push(chat);
            }
            store.commit('SETLISTCHATS', list);
          }
        }
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
