/* eslint-disable react/prop-types */
import { useState } from 'react';
import './CourseForm.css'; // Import the CSS file
import CourseList from '../CourseList/CourseList';

function CourseForm( {newcourseList,courses}) {
  const [courseName, setCourseName] = useState({
    name: '',
    description: '',
    level: 'Beginner',
    image: '',
    batches: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseName(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleBatchChange = (e, index) => {
    const { name, value } = e.target;
    const updatedBatches = [...courseName.batches];
    updatedBatches[index][name] = value;
    setCourseName(prevState => ({
      ...prevState,
      batches: updatedBatches
    }));
  };

  const addBatch = () => {
    setCourseName(prevState => ({
      ...prevState,
      batches: [...prevState.batches, { name: '', startDate: '', endDate: '', capacity: '' }]
    }));
  };

  const handleSubmit = (e) => {
    
    newcourseList(courseName.name,courseName.description,courseName.level,courseName.image,courseName.batches);
    e.preventDefault();

    // Resetting the form fields
    setCourseName({
      name: '',
      description: '',
      level: 'Beginner',
      image: null,
      batches: []
    });
    // Handle form submission, e.g., send data to server
    
  };

  const handleDeleteBatch=(index)=>{
    if(courseName.batches.includes(index)){
      courseName(courseName.batches.filter((id)=> id !== index));
    }
  }

  return (<div>

    <form onSubmit={handleSubmit} className="form-container">
      <label>Name:</label>
      <input type="text" name="name" value={courseName.name} onChange={handleChange} />

      <label>Description:</label>
      <textarea name="description" value={courseName.description} onChange={handleChange} />

      <label>Level:</label>
      <select name="level" value={courseName.level} onChange={handleChange}>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <label>Image:</label>
      <input type="file" name="image" onChange={handleChange} />

      <label>Batches:</label>
      {courseName.batches.map((batch, index) => (
        <div key={index} className="batch-container">
          <input type="text" name="name" placeholder="Batch name" value={batch.name} onChange={(e) => handleBatchChange(e, index)} />
          <input type="date" name="startDate" value={batch.startDate} onChange={(e) => handleBatchChange(e, index)} />
          <input type="date" name="endDate" value={batch.endDate} onChange={(e) => handleBatchChange(e, index)} />
          <input type="number" name="capacity" placeholder="Capacity" value={batch.capacity} onChange={(e) => handleBatchChange(e, index)} />
          <button className='delete btn btn-danger' onClick={()=>handleDeleteBatch(index)} >Delete</button>
        </div>
      ))}
      <button type="button" onClick={addBatch}>Add Batch</button>
      
      <button type="submit" className='btn btn-success'>Submit</button>
    </form>
    <CourseList courses={courses} courseName={courseName} />
    
  </div>

  );
}

export default CourseForm;
