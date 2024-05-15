import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InstructorList from "./components/InstructorList/InstructorList";
import Navbar from "./components/Navbar/Navbar";
import CourseForm from "./components/CourseslForm/CourseForm";
import Lectures from "./components/LectureScheduling/Lectures";
import CourseList from "./components/CourseList/CourseList";
import Home from "./pages/Home";

function App() {
  const Courses = [
    {
      id: 1,
      name: "Reactjs",
      level: "Beginner",
      description: "introduction to reactjs",
      image: "empty",
      batches: [{
        name:"sasdasd",
        capacity:"23",
        startDate:'2024-05-21',
        endDate:"2024-05-21"
      },
      {
        name:"sasdasd",
        capacity:"23",
        startDate:'2024-05-21',
        endDate:"2024-05-21"
      }
      ],
    },
    {
      id: 2,
      name: "Dsa",
      level: "easy",
      description: "introduction to reactjs",
      image: "empty",
      batches: [
      {
        name:"sasdasd",
        capacity:"23",
        startDate:'2024-05-21',
        endDate:"2024-05-21"
      }],
    },
    {
      id: 3,
      name: "Computer Science",
      level: "easy",
      description: "introduction to reactjs",
      image: "empty",
      batches: [
        {
          name:"sasdasd",
          capacity:"23",
          startDate:'2024-05-21',
          endDate:"2024-05-21"
        },
        {
          name:"sasdasd",
          capacity:"23",
          startDate:'2024-05-21',
          endDate:"2024-05-21"
        },
        {
          name:"sasdasd",
          capacity:"23",
          startDate:'2024-05-21',
          endDate:"2024-05-21"
        }
      ],
    },
  ];

  const handleCourseCreation = (name, description, level, image, batches) => {
    const newCourse = {
      id: courses.length + 1,
      name: name,
      level: level,
      description: description,
      image: image,
      batches: batches,
    };
    setCourse([...courses, newCourse]);
    // console.log(courses);
  };

  const instructorList = [
    { id: 1, name: "Rohit Sharma" },
    { id: 2, name: "Virat Kholi" },
    { id: 3, name: "M S Dhoni" },
  ];

  const [courses, setCourse] = useState(Courses);
  const [instructor, setInstructor] = useState(instructorList);

  const handleNewInstructor = (instructorName, instructorDate) => {
    const onNewInstructor = {
      id: instructor.length + 1,
      name: instructorName,
      date: instructorDate,
    };
    setInstructor([...instructorList, onNewInstructor]);
    // console.log(typeof instructor);
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<CourseForm courses={courses}  newcourseList={handleCourseCreation} />} />
        <Route path="/instructor" element={<InstructorList onNewInstructor={handleNewInstructor} instructor={instructor}/>} />
        <Route path="/lectureScheduling" element={<Lectures instructor={instructor} courses={courses} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
