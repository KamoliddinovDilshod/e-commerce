import Online from "../../assets/images/online.svg";
import Offline from "../../assets/images/offline.svg";
import Path from "../../assets/images/detail.svg";
import "./main.css";
import { useRef } from "react";

const State = () => {
  const elRef = useRef();
  return (
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
  );
};

export default State;
