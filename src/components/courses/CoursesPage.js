import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  createCourse,
  loadCourses,
  courseSelector
} from "../../redux/modules/course";
import { loadAuthors } from "../../redux/modules/author";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.loadCourses().catch(error => {
      alert(error);
    });

    this.props.loadAuthors().catch(error => {
      alert(error);
    });
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

export default connect(
  state => ({
    courses: courseSelector(state)
  }),
  { createCourse, loadCourses, loadAuthors }
)(CoursesPage);
