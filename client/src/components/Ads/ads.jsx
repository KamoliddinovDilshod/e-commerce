import AdsInner from "../AdsInner/AdsInner";
import firstImg from "../../assets/images/image3.png";
import secoundImg from "../../assets/images/image4.png";
import "./main.css";

const Ads = () => {
  return (
    <section className="s-ads">
      <div className='container'>
        <div className='ads'>
          <AdsInner
            text={"E’LONLARINGIZNI BIZNI SAYTDA BERING"}
            src={firstImg}
          />
          <AdsInner className="ads-child"
            text={"ENG SO’NGI MASTERKLASSLAR BIZNING SAYTDA"}
            src={secoundImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Ads;
