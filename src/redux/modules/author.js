import { getAuthors } from "../../api/authorApi";

const LOAD_AUTHOR_SUCCESS = "LOAD_AUTHOR_SUCCESS";

export const loadAuthorSuccess = authors => ({
  type: LOAD_AUTHOR_SUCCESS,
  payload: authors
});

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_AUTHOR_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export function loadAuthors() {
  return function(dispatch) {
    return getAuthors()
      .then(authours => {
        dispatch(loadAuthorSuccess(authours));
      })
      .catch(error => {
        throw error;
      });
  };
}
