import Sector from "../../assets/images/sektor.svg";
import Path from "../../assets/images/detail.svg";
import "./main.css";
import Item from "../Item/Item";

const Section = () => {
  return (
    <div className='section'>
      <details className='main-section'>
        <summary className="list-section">
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
            <Item title='Ta’lim' subtitle='Matematika' subtext='Fizika' />
          </ul>
        </div>
      </details>
    </div>
  );
};

export default Section;
