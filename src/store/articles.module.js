import dataArticles from './data/articles.json';

const state = {
  listArticles: [],
};
const getters = {
  getListArticlesInStore: (state) => {
    return state.listArticles;
  },
};
const mutations = {
  SETLISTARTICLES: (state, data) => {
    state.listArticles = data;
  },
};
const actions = {
  fetchInfosArticlesInStore(store) {
    try {
      let data = dataArticles;
      if (data) {
        let list = [];
        for (const [key, value] of Object.entries(data)) {
          if (key == 'articles') {
            for (var objEvent of value) {
              let event = {
                titre: objEvent.titre,
                date: objEvent.date,
                lieu: objEvent.lieu,
                description: objEvent.description,
                photo: objEvent.photo,
              };
              list.push(event);
            }
            store.commit('SETLISTARTICLES', list);
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
