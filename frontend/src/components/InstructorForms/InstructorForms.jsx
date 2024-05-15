/* eslint-disable react/prop-types */
import './InstructorForms.css'

const InstructorForms = ({instructor}) => {
    
  return (
    <div>
        <h2>Instructors Name</h2>
      <div className="instructor-list">
        {instructor.map((items) => {
          return (<>
              <div key={items.id}>
                <h4>{items.name}</h4>
              </div>
          </>
          );
        })}
      </div>
    </div>
  )
}

export default InstructorForms;