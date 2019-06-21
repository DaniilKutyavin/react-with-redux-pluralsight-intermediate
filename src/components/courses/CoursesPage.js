import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCourse, loadCourses } from "../../redux/modules/course";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.loadCourses().catch(error => {
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
  loadCourses: PropTypes.func.isRequired
};

export default connect(
  state => ({
    courses: state.course
  }),
  { createCourse, loadCourses }
)(CoursesPage);
