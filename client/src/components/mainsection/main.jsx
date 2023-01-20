import Date from "../../assets/images/date.svg";
import Eye from "../../assets/images/eye.svg";
import Hour from "../../assets/images/hour.svg";
import "./main.css";

const Section = () => {
  return (
    <section className='main'>
      <div className='container'>
        <h2 className='main-title'>Oxirgi e’lonlar</h2>

        <ul className='main-list'>
          <li className='main-item'>
            <img className='main-img' src='' alt='' width={365} height={365} />
            <div className='main-box'>
              <div className='main-title-box'>
                <h3 className='main-title'>
                  Alisher Isaevdan biznes va IT bo’yicha master klass
                </h3>
              </div>
              <div className='main-subbox'>
                <ul className='main-sublist'>
                  <li className='main-subitem'>
                    <img className='main-pic' src='' alt='' />
                    <strong className='main-subtitle'>Alisher Isaev</strong>
                  </li>
                  <li className='main-subitem'>
                    <img className='main-pic' src={Date} alt='' />
                    <strong className='main-subtitle'>Alisher Isaev</strong>
                  </li>
                  <li className='main-subitem'>
                    <img className='main-pic' src={Date} alt='' />
                    <strong className='main-subtitle'>Alisher Isaev</strong>
                  </li>
                </ul>
                <ul className='main-sublist'>
                  <li className='main-subitem'>
                    <img className='main-pic' src='' alt='' />
                    <strong className='main-subtitle'>Alisher Isaev</strong>
                  </li>
                  <li className='main-subitem'>
                    <img className='main-pic' src={Hour} alt='' />
                    <strong className='main-subtitle'>Alisher Isaev</strong>
                  </li>
                  <li className='main-subitem'>
                    <img className='main-pic' src={Eye} alt='' />
                    <strong className='main-subtitle'>Alisher Isaev</strong>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section;
