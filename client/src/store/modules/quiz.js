import Backend from '../../services/Backend';
const bw = new Backend();

/**
 * Vuex Store definition for the quiz and its questions.
 */

// Initial state
const state = {
  error: false,
  ready: false,
  names: [],
  questions: [],
  completed: [],
  score: {
    correct: 0,
    completed: 0,
  },
};

// Actions
const actions = {
  submitCurrentAnswer({ state, commit }, answer) {
    let isCorrect = answer === state.questions[0].solution;
    commit('increaseScore', isCorrect);
    commit('setCurrentAnswer', { answer, isCorrect });
  },
  goToNextQuestion({ state, commit }) {
    commit('nextQuestion');
  },
  getQuestions({ state, commit }) {
    bw.getQuestions().then(
      function(res) {
        commit('setQuestions', res);
      },
      function(res) {
        commit('setError', true);
      }
    );
  },
  getNames({ state, commit }) {
    bw.getQuestions().then(
      function(res) {
        commit('setNames', res);
      },
      function(res) {
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
  isCurrentQuestionAnswered: (state, getters, rootState) => {
    return !!state.questions[0].status.chosen;
  },
  currentQuestionTitle: (state, getters, rootState) => {
    switch (state.questions[0].category) {
      case 'fun_title':
        return 'Whose fun title is:';
      case 'fact':
        return 'Whose surprising fact is:';
    }
  },
  allCompleted: (state, getters, rootState) => {
    return state.completed;
  },
  getCompletedCorrect: (state, getters, rootState) => {
    return state.completed.filter((q) => {
      return q.status.correct;
    });
  },
  getCompletedIncorrect: (state, getters, rootState) => {
    return state.completed.filter((q) => {
      return !q.status.correct;
    });
  },
  areAnyCompleted: (state, getters, rootState) => {
    return state.completed.correct.length || state.completed.incorrect.length;
  },
  isEnded: (state, getters, rootState) => {
    return !state.questions.length && state.completed.length;
  },
  getScore: (state, getters, rootState) => {
    return state.score;
  },
};

// Mutations
const mutations = {
  increaseScore(state, isCorrect) {
    state.score.completed++;
    if (isCorrect) {
      state.score.correct++;
    }
  },
  setCurrentAnswer(state, data) {
    state.questions[0].status.chosen = data.answer;
    state.questions[0].status.correct = !!data.isCorrect;
  },
  nextQuestion(state) {
    state.completed.unshift(state.questions[0]);
    state.questions.shift();
  },
  setQuestions(state, questions) {
    state.questions = questions;
    state.ready = true;
  },
  setNames(state, names) {
    state.names = names;
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
