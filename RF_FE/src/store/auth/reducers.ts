const reducers = {
  setTokenDetails: (state, action) => ({
    ...state,
    tokenDetails: action.payload,
  }),

  setUserDetails: (state, action) => ({
    ...state,
    userDetails: action.payload,
  }),
};

export { reducers };
