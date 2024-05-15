/* eslint-disable react/prop-types */
import InstructorForms from "../InstructorForms/InstructorForms";
import "./InstructorList.css";
import { useState } from "react";


const InstructorList = ({onNewInstructor,instructor}) => {
  
  const [instructorName, setinstructorName] = useState();
  const [instructorDate, setinstructorDate] = useState();

  const handleInstructorName = (event)=>{
    setinstructorName(event.target.value);
  }
  const handleInstructorDate= (event)=>{
    setinstructorDate(event.target.value);
  }

  const handleAddInstructor=()=>{
    onNewInstructor(instructorName,instructorDate);
    setinstructorName("");
    setinstructorDate("");
  }
  
  return (
    <div className="container">
      <div className="inputs">
        <div className="inputs-fields">
          <input type="text" placeholder=" Enter Instructor Name" value={instructorName} onChange={handleInstructorName} />
          <input type="date" value={instructorDate} onChange={handleInstructorDate} />
        </div>
        <div className="buttons">
          <button className="btn btn-success" onClick={handleAddInstructor}>Add</button>
        </div>
      </div>
      <InstructorForms instructor={instructor}/>
    </div>
  );
};

export default InstructorList;
