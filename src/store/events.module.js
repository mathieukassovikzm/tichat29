import dataEvents from './data/events.json';

const state = {
  listEvents: [],
};
const getters = {
  getListEventsInStore: (state) => {
    return state.listEvents;
  },
  getListEventsToComeInStore: (state) => {
    var listEventsToCome = [];
    var currentDate = new Date();

    let keys = Object.keys(state.listEvents);
    keys.forEach((key) => {
      let event = state.listEvents[key];
      if (new Date(event.date) > currentDate) {
        listEventsToCome.push(event);
      }
    });
    return listEventsToCome;
  },
};
const mutations = {
  SETLISTEVENTS: (state, data) => {
    state.listEvents = data;
  },
};
const actions = {
  fetchInfosEventsInStore(store) {
    try {
      let data = dataEvents;
      if (data) {
        let list = [];
        var i = 1;
        for (const [key, value] of Object.entries(data)) {
          if (key == 'events') {
            for (var objEvent of value) {
              let event = {
                eventId: i,
                titre: objEvent.titre,
                date: objEvent.date,
                lieu: objEvent.lieu,
                description: objEvent.description,
                photo: objEvent.photo,
              };
              list.push(event);
              i++;
            }
            store.commit('SETLISTEVENTS', list);
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
