import { useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Home from "../../assets/images/home.svg";
import Img from "../../assets/images/img.svg";
import "./main.css";
import { useState } from "react";
import axios from "axios";

const Press = () => {
  const elRef = useRef();
  const [time, setTime] = useState();
  const [species, setSpecies] = useState();
  const [hour, setHour] = useState();
  const [state, setState] = useState(false);
  const [select, setSelect] = useState();
  const [event, setEvent] = useState();
  const [link, setLink] = useState();
  const [name, setName] = useState();
  const [fullname, setFullname] = useState();
  const [professiya, setProfesiya] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [addnumber, setAdnumber] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [text, setText] = useState();

  const handlerData = async (evt) => {
    evt.preventDefault();

    const formData = new FormData()
    formData.append('image' , image)

    await axios({
      method: "POST",
      url: "http://localhost:5000/post/post",
      headers: {
        "content-type": "application/json",
        'content-type' : "multipart/form-data"
      },
      data: {
        title,
        description,
        image,
        text,
      },
    }).catch((error) => console.log(error));
  };

  const handlerForm = async (evt) => {
    evt.preventDefault();

    await axios({
      method: "POST",
      url: "http://localhost:5000/postOrganization",
      headers: {
        "content-type": "application/json",
      },
      data: {
        name,
        fullname,
        professiya,
        phonenumber,
        addnumber,
      },
    }).catch((error) => console.log(error));
  };

  const handlerSubmit = async (evt) => {
    evt.preventDefault();

    await axios({
      method: "POST",
      url: "http://localhost:5000/post",
      headers: {
        "content-type": "application/json",
      },
      data: {
        fulldate: `${time}`,
        hour,
        sector: select,
        species,
        event,
        link,
      },
    }).catch((error) => console.log(error));
  };

  

  return (
    <>
      <Navbar />
      <main className='press'>
        <div className='container'>
          <div className='press-box'>
            <img className='press-box-img' src={Home} alt='Home' />
            <strong className='press-subtitle'>E’lon berish</strong>
          </div>
          <div className='press-main-box'>
            <h2 className='press-title'>E’lon berish</h2>
            <form method='post' onSubmit={handlerSubmit} className='form'>
              <h3 className='form-title'>Vaqt va yo’nalishni tanlang</h3>
              <strong className='form-label'>
                O’tkaziladigan sanani kiriting
              </strong>
              <div className='form-box first-box'>
                <input
                  className='select-link'
                  type='date'
                  name='fulldate'
                  placeholder='dd-m-y'
                  required
                  onChange={(evt) => setTime(evt.target.value)}
                />
                <input
                  className='select-link'
                  type='time'
                  name='hour'
                  required
                  onChange={(evt) => setHour(evt.target.value)}
                />
              </div>
              <div className='select-main-box'>
                <div className='select-box'>
                  <strong className='form-label'>Yo’nalishni belgilang</strong>
                  <select
                    onChange={(evt) => setSelect(evt.target.value)}
                    className='form-select'
                    name='sector'
                    required>
                    <option value='IT'>IT</option>
                    <option value='Dizayn'>Dizayn</option>
                    <option value='Biznes'>Biznes</option>
                    <option value='Ta’lim'>Ta’lim</option>
                  </select>
                </div>
                <div className='select-box'>
                  <strong className='form-label'>Yo’nalishni belgilang</strong>
                  <select
                    onChange={(evt) => setSpecies(evt.target.value)}
                    className='form-select'
                    name='species'
                    required>
                    <option value='dasturlash'>Web dasturlash</option>
                    <option value='Mobiledasturlash'>Mobile dasturlash</option>
                    <option value='UI/UX dizayn'>UI/UX dizayn</option>
                    <option value='Grafik dizayn'>Grafik dizayn</option>
                    <option value='Menejment'>Menejment</option>
                    <option value='Kredit va audit'>Kredit va audit</option>
                    <option value='Matematika'>Matematika</option>
                    <option value='Fizika'>Fizika</option>
                  </select>
                </div>
              </div>
              <div className='verify-box'>
                <div className='select-box radio-box'>
                  <strong className='form-label radio-text'>Tadbir turi</strong>
                  <select
                    onChange={(evt) => setEvent(evt.target.value)}
                    className='form-select'
                    name='species'
                    required>
                    <option value='online'>ONLINE</option>
                    <option value='offline'>OFFLINE</option>
                  </select>
                </div>
                <div className='select-box link-box'>
                  <strong className='form-label'>Link kiriting</strong>
                  <input
                    className='select-link'
                    type='text'
                    name='link'
                    placeholder='Link'
                    required
                    onChange={(evt) => setLink(evt.target.value)}
                  />
                </div>
              </div>

              <button
                onClick={(evt) => evt.target.classList.add("color")}
                className='form-btn secound'
                type='reset'>
                Bekor qilish
              </button>
              <button
                onClick={(evt) => evt.target.classList.add("color")}
                className='form-btn'
                type='submit'>
                E’lonni yuborish
              </button>
            </form>
            <h3 className='organ-title'>Tashkilotchi</h3>
            <form method='post' onSubmit={handlerForm}>
              <div className='organ-box'>
                <label onClick={() => setState(true)} className='organ-label'>
                  <span className='organ-subtitle'>Jismoniy shaxs</span>
                  <input type='radio' name='name' />
                </label>
                <label onClick={() => setState(false)} className='organ-label'>
                  <span className='organ-subtitle'>Yuridik shaxs</span>
                  <input type='radio' name='name' />
                </label>
              </div>
              <div className='form press-organ-box'>
                <label className={state ? "display" : "organ-sublabel"}>
                  <span className='organ-labeltitle'>Yuridik nomi</span>
                  <input
                    className='organ-input'
                    type='text'
                    name='name'
                    onChange={(evt) => setName(evt.target.value)}
                  />
                </label>
                <label className='organ-sublabel'>
                  <span className='organ-labeltitle'>Ismi sharifi</span>
                  <input
                    className='organ-input'
                    type='text'
                    name='fullname'
                    required
                    onChange={(evt) => setFullname(evt.target.value)}
                  />
                </label>
                <label className='organ-sublabel'>
                  <span className='organ-labeltitle'>Professiya</span>
                  <input
                    className='organ-input'
                    type='text'
                    name='professiya'
                    required
                    onChange={(evt) => setProfesiya(evt.target.value)}
                  />
                </label>
                <label className='organ-sublabel'>
                  <span className='organ-labeltitle'>Telefon raqami</span>
                  <input
                    className='organ-input'
                    type='tel'
                    name='phonenumber'
                    required
                    onChange={(evt) => setPhonenumber(evt.target.value)}
                  />
                </label>
                <label className='organ-sublabel'>
                  <span className='organ-labeltitle'>Qo’shimcha tel raqam</span>
                  <input
                    className='organ-input'
                    type='tel'
                    name='addnumber'
                    required
                    onChange={(evt) => setAdnumber(evt.target.value)}
                  />
                </label>
                <div>
                  <button
                    onClick={(evt) => evt.target.classList.add("color")}
                    className='form-btn secound'
                    type='reset'>
                    Bekor qilish
                  </button>
                  <button
                    onClick={(evt) => evt.target.classList.add("color")}
                    className='form-btn'
                    type='submit'>
                    E’lonni yuborish
                  </button>
                </div>
              </div>
            </form>

            <form
              method='post'
              onSubmit={handlerData}
              className='form press-post'>
              <h3 className='post-title'>Post</h3>
              <label>
                <input
                  onChange={(evt) => setTitle(evt.target.value)}
                  type='text'
                  className='post-text'
                  placeholder='Mavzuni sarlavhasi'
                />
              </label>
              <div>
                <label>
                  <span className='post-subtitle'>Description</span>
                  <input
                    className='post-input'
                    type='text'
                    name='description'
                    required
                    onChange={(evt) => setDescription(evt.target.value)}
                  />
                </label>
                <label className='post-box'>
                  <span className='post-subtitle'>Rasm yuklash</span>
                  <input
                    className='post-file'
                    type='file'
                    accept='image/* , .png , .jpg'
                    placeholder='Upload img'
                    name='image'
                    required
                    onChange={(evt) => setImage(evt.target.files[0])}
                  />
                  <div className='post-subbox'>
                    <img className='post-img' src={Img} alt='Image upload' />
                    <span className='post-innerbox'>Upload img</span>
                  </div>
                </label>
                <strong className='post-subtext'>
                  Yuklanyotgan rasm o’lchami 1080x1080 hajmi 2 mb dan oshmasin
                </strong>
                <label className='post-next-box'>
                  <strong className='post-subtitle'>Mavzu matni</strong>
                  <textarea
                    name='text'
                    placeholder='Mavzu matni'
                    cols='81'
                    rows='10'
                    required
                    onChange={(evt) => setText(evt.target.value)}></textarea>
                </label>
              </div>

              <button
                onClick={(evt) => evt.target.classList.add("color")}
                className='form-btn secound'
                type='reset'>
                Bekor qilish
              </button>
              <button
                onClick={(evt) => evt.target.classList.add("color")}
                className='form-btn'
                type='submit'>
                E’lonni yuborish
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Press;
