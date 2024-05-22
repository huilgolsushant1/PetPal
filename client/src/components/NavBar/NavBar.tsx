import './NavBar.scss'
import logo from '../../assets/logo.jpg'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo'/>
      <p className='logoText'>PetPal</p>
      <nav>
        <NavLink to="/" className="li">Home</NavLink>
        <NavLink to={'adoption'} className="li">Adoption</NavLink>
        <NavLink to={'events'} className="li">Events</NavLink>
        <NavLink to={'petservices'} className="li">Services</NavLink>
        <NavLink to={'lostandfound'} className="li">Lost&Found</NavLink>
        <NavLink to={'petfacilities'} className="li">Facilities</NavLink>
      </nav>
    </div>
  )
}
//Chicle
export default NavBar