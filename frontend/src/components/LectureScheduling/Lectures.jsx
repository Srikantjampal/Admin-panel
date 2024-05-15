/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Lectures.css";

const Lectures = ({ instructor }) => {
  const [assignedLectures, setAssignedLectures] = useState({});

  const assignLecture = (instructorId, date) => {
    if (
      assignedLectures[date] &&
      assignedLectures[date].includes(instructorId)
    ) {
      alert("This instructor is already assigned to a lecture on this date.");
      return; 
    }

    setAssignedLectures((prevState) => ({
      ...prevState,
      [date]: [...(prevState[date] || []), instructorId],
    }));

    alert("Lecture assigned successfully!");
  };

  return (
    <div className="container">
      <div className="lecture-scheduler">
        <h2>Lecture Scheduler</h2>
        <div className="assign-lecture">
          <h3>Assign Lecture</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="instructor">Instructor:</label>
            <select id="instructor" className="form-control">
              {instructor.map((i) => {
                return (
                  <option key={i.id} value={i.id}>
                    {i.name}
                  </option>
                );
              })}
            </select>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" className="form-control" />
            <button
              onClick={() => {
                const instructorId = parseInt(
                  document.getElementById("instructor").value
                );
                const date = document.getElementById("date").value;
                assignLecture(instructorId, date);
              }}
            >
              Assign
            </button>
          </form>
        </div>
        <div className="assigned-lectures">
          <h3>Assigned Lectures</h3>
          <ul>
            {Object.entries(assignedLectures).map(([date, instructors]) => (
              <li key={date}>
                <strong>Date:</strong> {date}
                <ul>
                  {instructors.map((instructorId) => {
                    const assignedInstructor = instructor.find((i) => i.id === instructorId);
                    return assignedInstructor?(
                    <li key={instructorId}>
                      <strong>Instructor Name:</strong> {assignedInstructor.name}
                    </li>
                    ):null;
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lectures;
