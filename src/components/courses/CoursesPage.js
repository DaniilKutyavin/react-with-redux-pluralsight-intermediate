import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCourse } from "../../redux/modules/course";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSumbit = event => {
    // prevent reload on submit
    event.preventDefault();

    // do nothing if fields are empty
    if (!this.state.course.title) return;

    this.props.createCourse(this.state.course);

    // clear fields
    this.setState({ course: { title: "" } });
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

export default connect(
  state => ({
    courses: state.course
  }),
  { createCourse }
)(CoursesPage);
