import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CourseList({ courses }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>TItle</th>
          <th>Author</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => (
          <tr key={course.id}>
            <td>
              <a
                className="btn btn-light"
                href={`https://pluralsight.com/courses/${course.slug}`}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={`/course/${course.slug}`}>{course.title}</Link>
            </td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.any).isRequired
};
