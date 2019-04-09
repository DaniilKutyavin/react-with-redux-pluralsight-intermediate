const CREATE_COURSE = "CREATE_COURSE";

/**
 * @param {object} payload - course object
 */
export const createCourse = payload => ({
  type: CREATE_COURSE,
  payload
});

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_COURSE:
      return [...state, { ...payload }];
    default:
      return state;
  }
};
