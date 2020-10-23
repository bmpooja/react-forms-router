import React from "react";
import { getCourses } from "../api /courseApi";

class CoursesPage extends React.Component {
  state = {
    courses: [],
  };
  componentDidMount() {
    const data = getCourses();
    console.log("hello  :", data);
    // getCourses().then((courses) =>
    //   this.setState({
    //     courses: courses,
    //   })
    // );
  }
  render() {
    return (
      <>
        <h1>Courses</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author_id</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((item) => {
              return (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.authorId}</td>
                  <td>{item.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default CoursesPage;
