import { getCourses } from "../../api/courseApi";

const CREATE_COURSE = "CREATE_COURSE";
const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";

/**
 * @param {object} payload - course object
 */
export const createCourse = payload => ({
  type: CREATE_COURSE,
  payload
});

export const loadCoursesSuccess = courses => ({
  type: LOAD_COURSES_SUCCESS,
  payload: courses
});

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_COURSE:
      return [...state, { ...payload }];
    case LOAD_COURSES_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export const courseSelector = state =>
  state.course.map(course => {
    const authors = state.author;

    const author = authors.find(author => author.id === course.authorId) || {};
    const authorName = author.name;

    return { ...course, authorName };
  });

export function loadCourses() {
  return function(dispatch) {
    return getCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}
