import { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import MentorPerson from "../../assets/images/person.svg";
import Sector from "../../assets/images/sektor.svg";
import Online from "../../assets/images/online.svg";
import Offline from "../../assets/images/offline.svg";
import Path from "../../assets/images/detail.svg";
import Item from "../Item/Item";
import "./main.css";
import { useState } from "react";

const Header = () => {
  const [value , setValue] = useState()
  const elRef = useRef();

  return (
    <header className='header'>
      <Navbar />
      <div className='container'>
        <div className='header-box'>
          <h1 className='header-title'>
            Eng so’ngi master klasslar va tadbirlar bizning saytda
          </h1>
        </div>
        <div className='header-filter'>
          <form method="POST" className='header-trunk'>
            <input className='header-input' type='date' name='fulldate' />
            <div className='section'>
              <details className='main-section'>
                <summary className='list-section'>
                  <img src={Sector} alt='Section' />
                  <strong className='section-title'>Bo’lim tanlang</strong>
                  <img src={Path} alt='Path' />
                </summary>
                <div className='section-box'>
                  <ul className='section-list'>
                    <Item
                      title='IT'
                      subtitle='Web dasturlash'
                      subtext='Mobile dasturlash' 
                    />
                    <Item
                      title='IT'
                      subtitle='Web dasturlash'
                      subtext='Mobile dasturlash'
                    />
                    <Item
                      title='Dizayn'
                      subtitle='UI/UX dizayn'
                      subtext='Grafik dizayn'
                    />
                    <Item
                      title='Dizayn'
                      subtitle='UI/UX dizayn'
                      subtext='Grafik dizayn'
                    />
                    <Item
                      title='Biznes'
                      subtitle='Menejment'
                      subtext='Kredit va audit'
                    />
                    <Item
                      title='Biznes'
                      subtitle='Menejment'
                      subtext='Kredit va audit'
                    />
                    <Item
                      title='Ta’lim'
                      subtitle='Matematika'
                      subtext='Fizika'
                    />
                  </ul>
                </div>
              </details>
            </div>
            <details className='State'>
              <summary className='State-list'>
                <img src={Online} alt='Online or Offline' />
                <strong className='State-title'>Online / Offline</strong>
                <img src={Path} alt='Path' />
              </summary>
              <div className='State-box'>
                <div className='State-subbox'>
                  <img src={Online} alt='Online or Offline' />
                  <strong ref={elRef} className='State-title'>
                    Online
                  </strong>
                  <input
                    onClick={() => console.log(elRef.current.element)}
                    type='radio'
                    name='Online/Offline'
                    aria-label='Online'
                    value='Online'
                  />
                </div>
                <div className='State-subbox'>
                  <img src={Offline} alt='Online or Offline' />
                  <strong className='State-title'>Offline</strong>
                  <input
                    type='radio'
                    name='Online/Offline'
                    aria-label='Offline'
                    value='Offline'
                  />
                </div>
              </div>
            </details>
            <details className='mentor'>
              <summary className='mentor-list'>
                <img src={MentorPerson} alt='Mentor' />
                <strong className='mentor-title'>Ism familya</strong>
                <img src={Path} alt='Path' />
              </summary>
              <div className='mentor-box'>
                <input type='checkbox' name='' id='' />
                <p className='mentor-personname'>Abdulla Azizov</p>
              </div>
            </details>
            <button type="submit" className='header-button'>Izlash</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
