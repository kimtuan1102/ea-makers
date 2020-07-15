export const ADD_ACCOUNT_MODAL = "add-account-modal";
export default {
  state: {
    accountModal: false
  },
  mutations: {
    [ADD_ACCOUNT_MODAL](state) {
      state.accountModal = !state.accountModal;
    }
  },
  actions: {
    [ADD_ACCOUNT_MODAL](context) {
      context.commit(ADD_ACCOUNT_MODAL);
    }
  }
};
