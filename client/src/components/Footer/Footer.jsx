import { Link, NavLink } from "react-router-dom";
import Tel from "../../assets/images/Tel.svg";
import Facebook from "../../assets/images/facebook.svg";
import Telegram from "../../assets/images/telegram.svg";
import Instagram from "../../assets/images/instagram.svg";
import "./main.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-main-box'>
          <NavLink className='footer-logo' to={"/"}>
            Pressa
          </NavLink>
          <ul className='footer-list'>
            <li className='footer-item'>
              <NavLink className={"footer-link"} to={"/about"}>Biz haqimizda</NavLink>
            </li>
            <li className='footer-item'>
              <NavLink className={"footer-link"} to={"/faq"}>Savol va Javoblar</NavLink>
            </li>
          </ul>
          <div className='footer-box'>
            <img className='footerbox-img' src={Tel} alt='Telephone' />
            <a className='footer-box-link' href='tel:+71 200-11-02'>
              +71 200-11-02
            </a>
          </div>
          <div className='footer-box'>
            <a
              className='footer-box-link'
              href='https://www.facebook.com/'
              target='_blank'>
              <img className='footerbox-img' src={Facebook} alt='Facebook' />
            </a>
            <a
              className='footer-box-link'
              href='https://www.instagram.com/'
              target='_blank'>
              <img className='footerbox-img' src={Instagram} alt='Instagram' />
            </a>
            <a
              className='footer-box-link'
              href='https://t.me/harbiy_pressa'
              target='_blank'>
              <img className='footerbox-img' src={Telegram} alt='Telegram' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
