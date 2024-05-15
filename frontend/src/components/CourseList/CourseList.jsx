/* eslint-disable react/prop-types */
import "./CourseList.css";
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
const CourseList = ({ courses, courseName }) => {
    // console.log(courses);
    const [showBatches, setshowBatches] = useState(false);

    const showAllBatches = (courseId) => {
        setshowBatches(!showBatches);
      };
  return (
    <div className="container course-list-container">
      <h2>Course List</h2>
      <ul className="course-list">
        {courses.map((item) => {
          return (
            <div key={item.id} className="course-col">
              <div className="row">
                <div className="lists">
                  <li className="course-list-item">
                    <strong>{item.name}</strong> -{" "}
                    <span className="description">{item.description}</span> -{" "}
                    {item.level}
                  </li>
                </div>
                <div className="batches">
                  <button className="btn btn-danger" onClick={()=>showAllBatches(item.id)}>
                    <span>Batches</span>
                  </button>
                </div>
              </div>
              <div className="row-2">
                {showBatches && (
                  <div>
                    <h3>Batches</h3>
                    {showBatches &&
                      courses.batches.map((batch) => {
                        <li key={batch.id}>{batch.name}</li>
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CourseList;
