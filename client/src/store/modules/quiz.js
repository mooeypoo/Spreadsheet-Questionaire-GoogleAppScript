import Backend from '../../services/Backend';
const bw = new Backend();

// Initial state
const state = {
  error: false,
  ready: false,
  questions: [],
  completed: {
    correct: [],
    incorrect: [],
  },
  score: 0,
  total: 0,
};

// Actions
const actions = {
  submitAnswer({ state, commit }, isCorrect) {
    commit('setAnswer', isCorrect);
  },
  goToNextQuestion({ state, commit }, isCorrect) {
    commit('nextQuestion', isCorrect);
  },
  getQuestions({ state, commit }) {
    bw.getQuestions().then(
      function (res) {
        commit('setQuestions', res);
      },
      function (res) {
        commit('setError', true);
      }
    );
  },
};

// Getters
const getters = {
  currentQuestion: (state, getters, rootState) => {
    return state.questions[0];
  },
  areAnyCompleted: (state, getters, rootState) => {
    return state.completed.correct.length || state.completed.incorrect.length;
  },
  isEnded: (state, getters, rootState) => {
    return (
      !state.questions.length &&
      (state.completed.correct.length || state.completed.incorrect.length)
    );
  },
};

// Mutations
const mutations = {
  setAnswer(state, isCorrect) {
    state.total++;
    if (isCorrect) {
      state.score++;
    }
  },
  nextQuestion(state, isCorrect) {
    if (isCorrect) {
      state.completed.correct.push(state.questions[0]);
    } else {
      state.completed.incorrect.push(state.questions[0]);
    }
    state.questions.shift();
  },
  setQuestions(state, questions) {
    state.questions = questions;
    state.ready = true;
  },
  setError(state, isError) {
    state.error = !!isError;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
