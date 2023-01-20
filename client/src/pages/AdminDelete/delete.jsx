import { NavLink } from "react-router-dom";
import AdminNav from "../../components/Admin_navbar/admin_nav";
import Home from "../../assets/images/vectors.svg";
import First from "../../assets/images/first.svg";
import Secound from "../../assets/images/two.svg";
import Three from "../../assets/images/cog.svg";
import Logout from "../../assets/images/logout.svg";
import Search from "../../assets/images/search.svg";
import Badge from "../../assets/images/badge.svg";
import Ellipse from "../../assets/images/ellipse.png";

const Delete = () => {
  return (
    <>
      <header className='admin-header'>
        <NavLink className='logo' to='/'>
          Pressa
        </NavLink>
        <nav>
          <ul className='admin-list'>
            <AdminNav link={"/admin"} title={"Bosh sahifa"} img={Home} />
            <AdminNav link={"/admin"} title={"Statistika"} img={First} />
            <AdminNav
              link={"/admin/delete"}
              title={"O’chirilganlar"}
              img={Secound}
            />
            <AdminNav link={"/admin"} title={"Sozlamalar"} img={Three} />
            <AdminNav link={"/admin"} title={"Chiqish"} img={Logout} />
          </ul>
        </nav>
        <span className='admin-auth-badge'>2022 All Rights</span>
      </header>
      <main>
        <section className='admin-main-top main-top'>
          <div className='admin-container'>
            <div className='admin-box'>
              <div className='admin-main-subbox'>
                <img className='admin-img' src={Search} alt='lupa' />
                <input
                  className='admin-search-input'
                  type='text'
                  placeholder='search'
                />
              </div>
              <div className='admin-subbox'>
                <img className='admin-pic' src={Badge} alt='badge' />
                <div className='admin-inner-subbox'>
                  <img
                    className='admin-real-img'
                    src={Ellipse}
                    alt="admin's picture"
                  />
                  <span>
                    <strong className='admin-name'>Admin</strong>
                    <span className='admin-id'>1</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className='admin-line' />
        <section className='admin-main'>
          <div className='admin-space-container'>
            <span className='admin-notification'>O`chirilganlar</span>
            <div className='admin-card card'>
              <div className='card-top'>
                <div className='card-text-box'>
                  <h3 className='card-text'>
                    Ux Ui dan masterklassni o’tkazib yubormang Yoshlar
                    telekanalida
                  </h3>
                </div>
              </div>

              <ul className='card-list'>
                <li className='card-item'>
                  <strong className='card-name'>Abbos Janizakov</strong>
                </li>
                <li className='card-item'>
                  <strong className='card-name'>+998 90 123-45-67</strong>
                </li>
                <li className='card-item'>
                  <strong className='card-name'>30/01/2022</strong>
                </li>
                <li className='card-item'>
                  <strong className='card-name'>15:00</strong>
                </li>
                <li className='card-item'>
                  <strong className='card-name'>UI/UX dizayner</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Delete;
