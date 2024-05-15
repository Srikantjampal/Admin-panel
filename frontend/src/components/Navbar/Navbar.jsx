import { NavLink } from 'react-router-dom'
import './Navbar.css'
// import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='title'>
            <h2>Admin Panel</h2>
        </div>
        <div className='nav-links'>
            <ul>
                <li> <NavLink className="links" to="/course">Course </NavLink></li>
                <li> <NavLink className="links" to="/instructor">Instructor </NavLink></li>
                <li> <NavLink className="links" to="/lectureScheduling">LectureScheduling</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar