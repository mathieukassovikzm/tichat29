import dataActualites from './data/actualites.json';

const state = {
  listActualites: [],
};
const getters = {
  getlistActualitesInStore: (state) => {
    return state.listActualites;
  },
  getactualiteInStore: (state) => (id) => {
    return state.listActualites.filter((actualite) => actualite.actualiteId == id);
  },
  getlistActualitesToComeInStore: (state) => {
    var listActualitesToCome = [];
    var currentDate = new Date();

    let keys = Object.keys(state.listActualites);
    keys.forEach((key) => {
      let actualite = state.listActualites[key];
      if (new Date(actualite.date) > currentDate) {
        listActualitesToCome.push(actualite);
      }
    });
    return listActualitesToCome;
  },
};
const mutations = {
  SETLISTACTUALITES: (state, data) => {
    state.listActualites = data;
  },
};
const actions = {
  fetchInfosactualitesInStore(store) {
    try {
      let data = dataActualites;
      if (data) {
        let list = [];
        var i = 1;
        for (const [key, value] of Object.entries(data)) {
          if (key == 'actualites') {
            for (var objActualite of value) {
              let actualite = {
                actualiteId: i,
                titre: objActualite.titre,
                date: objActualite.date,
                lieu: objActualite.lieu,
                description: objActualite.description,
                photo: objActualite.photo,
              };
              list.push(actualite);
              i++;
            }
            store.commit('SETLISTACTUALITES', list);
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
