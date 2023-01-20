import { NavLink } from "react-router-dom";
import "./main.css";

const AdminNav = ({ link, img, title }) => {
  return (
    <li className='admin-item'>
      <NavLink className='admin-nav-link' to={link}>
        <img className='admin-nav-img' src={img} alt={title} />
        <strong className='admin-nav-title'>{title}</strong>
      </NavLink>
    </li>
  );
};

export default AdminNav;
