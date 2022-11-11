import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bestMovieList: [],
    watchLists: [],
  },
  getters: {},
  mutations: {
    GET_BEST_MOVIE_LIST(state, bestMovieList) {
      console.log(bestMovieList)
      state.bestMovieList = bestMovieList
    },
    CREATE_WATCH(state, watchItem) {
      state.watchLists.push(watchItem)
    },
    UPDATE_WATCH_STATUS(state, watchItem) {
      state.watchLists = state.watchLists.map((watch) => {
        if (watch === watchItem) {
          watch.isWatched = !watch.isWatched
        }
        return watch
      })
    },
  },
  actions: {
    createWatch(context, watchTitle) {
      const watchItem = {
        title: watchTitle,
        isWatched: false,
      }
      context.commit("CREATE_WATCH", watchItem)
    },
    updateWatchStatus(context, watchItem) {
      context.commit("UPDATE_WATCH_STATUS", watchItem)
    },
  },
  modules: {},
})
