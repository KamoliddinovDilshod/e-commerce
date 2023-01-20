import { NavLink } from "react-router-dom";
import Search from "../../assets/images/Vector.svg";
import "./main.css";

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav'>
          <NavLink className={"nav-link"} to='/'>
            Pressa
          </NavLink>
          <div className='nav-box'>
            <img className='nav-img' src={Search} alt='Search' />
            <input className='nav-input' type='text' placeholder='Izlash' />
          </div>
          <ul className='nav-list'>
            <li className='nav-item'>
              <NavLink className='nav-sublink' to='/about'>
                Biz haqimizda
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-sublink' to='/faq'>
                Savol va javoblar
              </NavLink>
            </li>
          </ul>
          <NavLink className='nav-presslink' to='/press'>
            + E’lon berish
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
