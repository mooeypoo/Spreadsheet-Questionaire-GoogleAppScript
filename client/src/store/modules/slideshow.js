import Backend from '../../services/Backend';
import Vue from 'vue';
const bw = new Backend();

/**
 * Vuex Store definition for slideshow type displays
 */

// Initial state
const state = {
  ready: [],
  error: null,
  slides: {
    // structure:
    // catName: { current: null, items: [], seen: [] }
  },
};

// Actions
const actions = {
  fetchSlides({ state, commit }, columnName) {
    bw.getSlides(columnName).then(
      function(res) {
        commit('setSlides', res);
      },
      function(res) {
        commit('setError', true);
      }
    );
  },
  goToNextSlide({ state, commit }, category) {
    commit('nextSlide', category);
  },
};

// Getters
const getters = {
  getCurrentSlide: (state) => (category) => {
    return (
      state.slides[category] &&
      state.slides[category].items &&
      state.slides[category].items[0]
    );
  },
  getSeenSlides: (state) => (category) => {
    return state.slides[category] && state.slides[category].seen;
  },
  isEnded: (state) => (category) => {
    return (
      state.slides[category] &&
      !state.slides[category].items.length &&
      state.slides[category].seen.length
    );
  },
  isReady: (state) => (category) => {
    return state.ready.indexOf(category) > -1;
  },
  hasSeenSlides: (state) => (category) => {
    return state.slides[category] && state.slides[category].seen.length;
  },
};

// Mutations
const mutations = {
  setSlides(state, data) {
    const category = Object.keys(data)[0];
    // Add a property to an object, using Vue.set
    // Otherwise, Vue cannot track its state
    Vue.set(state.slides, category, { items: data[category], seen: [] });

    state.ready.push(category);
  },
  nextSlide(state, category) {
    state.slides[category].seen.unshift(state.slides[category].items[0]);
    state.slides[category].items.shift();
  },
  setError(state, err) {
    state.error = err;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
