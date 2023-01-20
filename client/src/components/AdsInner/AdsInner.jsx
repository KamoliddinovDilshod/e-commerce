import "./main.css"

const AdsInner = ({text , src}) =>{
  return(
    <div className="ads-box">
      <div className="ads-text-box">
        <p className="ads-text">
          {text}
        </p>
      </div>
      <img className="ads-img" src={src} alt={text} />
    </div>
  )
}

export default AdsInner;