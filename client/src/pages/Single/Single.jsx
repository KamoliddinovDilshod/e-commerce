import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../assets/images/home.svg";
import Year from "../../assets/images/year.svg";
import Time from "../../assets/images/time.svg";
import Online from "../../assets/images/blueonline.svg";
import Share from "../../assets/images/share.svg";
import Facebook from "../../assets/images/facebookicon.svg";
import Tumbir from "../../assets/images/tumbir.svg";
import Instagram from "../../assets/images/instagramicon.svg";
import Telegram from "../../assets/images/telegramicon.svg";
import Twitter from "../../assets/images/twitter.svg";
import axios from "axios";
import "./main.css";
import { useNavigate } from "react-router-dom";

const Single = () => {
  const {id} = useNavigate();
  console.log(id);

  async function description() {
    const data = await axios.get(`http://localhost:5000/description/${id}`);
    console.log(data.data);
    return data.data
  }

  description();

  return (
    <>
      <Navbar />
      <div className='container'>
        <main className='main'>
          <div className='about-box'>
            <img className='about-box-img' src={Home} alt='Home' />
            <strong className='about-subtitle'>Biznes</strong>
          </div>

          <div className='main-basic-box'>
            <div className='main-left-box'>
              <div className='main-left-textbox'>
                <strong className='main-left-title'>
                  Alisher Isaevdan biznes va IT bo’yicha master klass
                </strong>
              </div>
              <div className='main-left-subbox'>
                <span className='main-span'>
                  <img className='main-year' src={Year} alt='Date' />
                  <strong className='main-write-date'>17 / 01 / 2022</strong>
                </span>
                <span className='main-span'>
                  <img className='main-year' src={Time} alt='Date' />
                  <strong className='main-write-date'>15:00</strong>
                </span>
                <span className='main-span'>
                  <img className='main-year' src={Online} alt='Date' />
                  <strong className='main-write-date'>Online</strong>
                </span>
              </div>
              <span className='main-span'>
                <img className='main-year' src={Share} alt='Date' />
                <strong className='main-write-date'>Ulashing</strong>
              </span>

              <div className='social-media'>
                <a
                  className='social-icon'
                  target={"_blank"}
                  href='https://facebook.com/'>
                  <img src={Facebook} alt='facebook' />
                </a>
                <a
                  className='social-icon'
                  target={"_blank"}
                  href='https://tumbir.com/'>
                  <img src={Tumbir} alt='tumbir' />
                </a>
                <a
                  className='social-icon'
                  target={"_blank"}
                  href='https://instagram.com/'>
                  <img src={Instagram} alt='facebook' />
                </a>
                <a
                  className='social-icon'
                  target={"_blank"}
                  href='https://facebook.com/'>
                  <img src={Twitter} alt='facebook' />
                </a>
                <a
                  className='social-icon'
                  target={"_blank"}
                  href='https://facebook.com/'>
                  <img src={Telegram} alt='facebook' />
                </a>
              </div>
            </div>

            <div className='main-right-box'>
              <div className='container-right'>
                <div className='main-right-titlebox'>
                  <h2 className='main-right-title'>
                    Alisher Isaevdan biznes va IT bo’yicha master klass
                  </h2>
                </div>
                <div className='main-right-text-box'>
                  <p className='main-right-top-text'>
                    Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli
                    bo'lgan musobaqalarni tashkil etishda davom etadi. Biz bu
                    gal markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner,
                    frontend va backend dasturchilarni "bir dasturxon atrofida"
                    to'plashga qaror qildik.
                  </p>
                </div>
                <img
                  className='main-right-img'
                  width={"764px"}
                  height={"498px"}
                  src=''
                  alt=''
                />
                <div className='main-right-text-box'>
                  <p className='main-right-text'>
                    Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli
                    bo'lgan musobaqalarni tashkil etishda davom etadi. Biz bu
                    gal markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner,
                    frontend va backend dasturchilarni "bir dasturxon atrofida"
                    to'plashga qaror qildik. Kuni kecha bo'lib o'tgan
                    uchrashuvda to'rt kishidan iborat 8 ta guruh tashkil
                    qilinib, ularga ikki hafta muddat ichida Toshkent shahridagi
                    har qanday onlayn va oflayn tadbirlar to'g'risida e'lonli
                    ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash
                    vazifasi topshirildi. Demak, roppa-rosa 2 haftadan keyin
                    ishtirokchilarning qilgan ishlari chetdan kelgan mehmonlar
                    tomonidan xolis baholanib, dastlabki uchta o'rin egalari
                    qimmatbaho sovg'alar bilan taqdirlanadi. Biz barchaga omad
                    tilab qolamiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Single;
