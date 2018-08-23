// Actions
export const FETCHING_USER_DATA = 'user/FETCHING_USER_DATA';
export const LOGIN = 'user/LOGIN';
export const NO_USER = 'user/NO_USER';
export const ADD_ERROR = 'user/ADD_ERROR';
export const CLEAR_ERROR = 'user/CLEAR_ERROR';

// Initial State
const initialState = {
  user: {},
  isFetchingDataFromFirebase: false,
  haveUser: false,
  error: null,
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USER_DATA:
      return {
        ...state,
        isFetchingDataFromFirebase: action.isFetchingDataFromFirebase,
        haveUser: action.haveUser,
      };

    case LOGIN:
      return {
        ...state,
        user: action.user,
        isFetchingDataFromFirebase: action.isFetchingDataFromFirebase,
        haveUser: action.haveUser,
      };

    case NO_USER:
      return {
        ...state,
        user: action.user,
        isFetchingDataFromFirebase: action.isFetchingDataFromFirebase,
        haveUser: action.haveUser,
      };

    case ADD_ERROR:
      return {
        ...state,
        haveUser: action.haveUser,
        isFetchingDataFromFirebase: action.isFetchingDataFromFirebase,
        error: action.error,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        haveUser: action.haveUser,
        isFetchingDataFromFirebase: action.isFetchingDataFromFirebase,
        error: action.error,
      };

    default:
      return state;
  }
};

// Sychronous functions
export const startCallToFirebase = () => (dispatch) => {
  dispatch({
    type: FETCHING_USER_DATA,
    isFetchingDataFromFirebase: true,
    haveUser: false,
  });  
}

export const createUser = user => (dispatch) => {
  dispatch({
    type: LOGIN,
    isFetchingDataFromFirebase: false,
    haveUser: true,
    user: {
      email: user.email,
      account_source: user.providerData.providerId,
      id: user.l,
    },
  });
};

export const setUser = user => (dispatch) => {
  console.log('setting user:', user );
  dispatch({
    type: LOGIN,
    isFetchingDataFromFirebase: true,
    haveUser: true,
    user: {
      email: user.email,
      account_source: user.providerData[0].providerId,
      id: user.l,
    },
  });
};

export const clearUser = () => (dispatch) => {
  dispatch({
    type: NO_USER,
    isFetchingDataFromFirebase: false,
    haveUser: false,
    user: null,
  });
};

export const addError = error => (dispatch) => {
  console.log(error);
  dispatch({
    type: ADD_ERROR,
    isFetchingDataFromFirebase: false,
    haveUser: false,
    error,
  });
};

export const clearError = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
    isFetchingDataFromFirebase: false,
    haveUser: false,
    error: null,
  });
};