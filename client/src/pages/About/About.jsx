import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../assets/images/home.svg";
import "./main.css";

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className='container'>
          <div className='about-box'>
            <img className='about-box-img' src={Home} alt='Home' />
            <strong className='about-subtitle'>Biz haqimizda</strong>
          </div>
          <div className='about-main-box'>
            <h2 className='about-title'>Biz haqimizda</h2>

            <div className='text-box'>
              <p className='about-text'>
                Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
                musobaqalarni tashkil etishda davom etadi. Biz bu gal
                markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner,
                frontend va backend dasturchilarni "bir dasturxon atrofida"
                to'plashga qaror qildik.
              </p>
            </div>
            <div className='text-box'>
              <p className='about-text'>
                Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
                musobaqalarni tashkil etishda davom etadi. Biz bu gal
                markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner,
                frontend va backend dasturchilarni "bir dasturxon atrofida"
                to'plashga qaror qildik.
              </p>
            </div>
            <div className='text-box'>
              <p className='about-text'>
                Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta
                guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent
                shahridagi har qanday onlayn va oflayn tadbirlar to'g'risida
                e'lonli ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash
                vazifasi topshirildi.
              </p>
            </div>
            <div className='text-box'>
              <p className='about-text'>
                Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan
                ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib,
                dastlabki uchta o'rin egalari qimmatbaho sovg'alar bilan
                taqdirlanadi. Biz barchaga omad tilab qolamiz.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
