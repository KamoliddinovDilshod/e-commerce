import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import "./main.css";
import { useRef } from "react";

const Item = ({ title, subtitle, subtext }) => {

  const [value , setValue] = useState()
  const elRef = useRef()

  useEffect(() =>{
    async function data() {
      await axios({
        method: "POST",
        url: "http://localhost:5000/filter",
        headers : {
          'content-type' : "application/json"
        },
        data: {
          species: value
        }
      })
    }
    data()
  }
  ,[value])
  
  console.log(value);

  return (
    <>
      <li className='item'>
        <h3 className='item-title'>{title}</h3>
        <form method='post'>
          <div className='item-box'>
            <input onChange={() => setValue(subtitle)} className='item-input' type='checkbox' name="spesiec" />
            <span ref={elRef} className='item-subtitle'>{subtitle}</span>
            
          </div>
          <div className='item-box'>
            <input onChange={() => setValue(subtext)} className='item-input' type='checkbox' name="spesiec" />
            <span className='item-subtitle'>{subtext}</span>
          </div>
        </form>
      </li>
    </>
  );
};

export default Item;
