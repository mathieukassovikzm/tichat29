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
  getChatInStore: (state) => (id) => {
    return state.listChats.filter((chat) => chat.chatId === id);
  },
  getListChatsDispoInStore: (state) => {
    return state.listChats.filter((chat) => chat.dispo);
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
        var i = 1;
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
                chatId: i,
                nom: objChat.nom,
                description: objChat.description,
                photos: objChat.photos,
                dispo: objChat.dispo,
              };
              list.push(chat);
              i++;
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
