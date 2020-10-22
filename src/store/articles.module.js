import dataArticles from './data/articles.json';

const state = {
  listArticles: [],
};
const getters = {
  getListArticlesInStore: (state) => {
    return state.listArticles;
  },
  getArticleInStore: (state) => (id) => {
    return state.listArticles.filter((article) => article.articleId == id);
  },
  getListArticlesToComeInStore: (state) => {
    var listArticlesToCome = [];
    var currentDate = new Date();

    let keys = Object.keys(state.listArticles);
    keys.forEach((key) => {
      let article = state.listArticles[key];
      if (new Date(article.date) > currentDate) {
        listArticlesToCome.push(article);
      }
    });
    return listArticlesToCome;
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
        var i = 1;
        for (const [key, value] of Object.entries(data)) {
          if (key == 'articles') {
            for (var objArticle of value) {
              let article = {
                articleId: i,
                titre: objArticle.titre,
                date: objArticle.date,
                lieu: objArticle.lieu,
                description: objArticle.description,
                photo: objArticle.photo,
              };
              list.push(article);
              i++;
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
