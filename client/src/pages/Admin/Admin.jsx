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
import "./main.css";
import Btn from "../../components/Button/Btn";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Admin = () => {
  const [state, setState] = useState([]);
  const [status, setStatus] = useState('');

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    async function data() {
      await axios({
        method: "PUT",
        url: "http://localhost:5000/admin/status",
        headers: {
          "content-type": "application/json",
          'access_token': `${token}`,
        },
        data: {
          status,
          id: state[0]["id"],
        },
      });
    }
    // console.log(state[0]["id"]);
    data()
  }, [status]);

  const formHandler = async () => {
    const data = await axios({
      method: "GET",
      url: "http://localhost:5000/admin",
      headers: {
        "content-type": "application/json",
        access_token: `${token}`,
      },
    }).catch((error) => console.log(error));
    setState(data.data);
  };

  const formHandSubmit = async () => {
    const data = await axios({
      method: "GET",
      url: "http://localhost:5000/admin/ASC",
      headers: {
        "content-type": "application/json",
        access_token: `${token}`,
      },
    }).catch((error) => console.log(error));
    setState(data.data);
  };

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
            <li className='admin-item'>
              <button
                className='admin-nav-link admin-btns'
                onClick={() => window.localStorage.removeItem("token")}>
                <img className='admin-nav-img' src={Logout} alt='Chiqish' />
                <strong className='admin-nav-title'>Chiqish</strong>
              </button>
            </li>
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
        <section className='admin-main-inner'>
          <div className='admin-space-container'>
            <div className='admin-box'>
              <div className='admin-left-box'>
                <Btn title={"Kutilmoqda"} />
                <Btn title={"Qabul qiligan"} />
                <Btn title={"Rad etilgan"} />
              </div>
              <div>
                <label onClick={formHandSubmit} className='admin-label'>
                  <strong className='admin-checkbox'>Oxirgilari</strong>
                  <input type='radio' name='sort' />
                </label>
                <label onClick={formHandler}>
                  <strong className='admin-checkbox'>Eng so’ngilari</strong>
                  <input type='radio' name='sort' />
                </label>
              </div>
            </div>
          </div>
        </section>
        <hr className='admin-line' />
        <section className='admin-main'>
          <div className='admin-space-container'>
            <span className='admin-notification'>Xabarnomalar</span>

            {state.map((e) => (
              <div>
                <div className='admin-card card'>
                  <div className='card-top'>
                    <div className='card-text-box'>
                      <h3 className='card-text'>{e.title}</h3>
                    </div>
                    <div className='card-btn-box'>
                      <button
                        onClick={() => setStatus("ignore")}
                        className='card-btn'>
                        Bekor qilish
                      </button>
                      <button
                        onClick={() => setStatus("acsept")}
                        className='card-btn'>
                        Tasdiqlash
                      </button>
                    </div>
                  </div>

                  <ul key={e.id} className='card-list'>
                    <li className='card-item'>
                      <strong className='card-name'>{e.fullname}</strong>
                    </li>
                    <li className='card-item'>
                      <strong className='card-name'>{e.phonenumber}</strong>
                    </li>
                    <li className='card-item'>
                      <strong className='card-name'>{e.fulldate}</strong>
                    </li>
                    <li className='card-item'>
                      <strong className='card-name'>{e.hour}</strong>
                    </li>
                    <li className='card-item'>
                      <strong className='card-name'>{e.professiya}</strong>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Admin;
