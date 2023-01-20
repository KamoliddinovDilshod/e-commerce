import MentorPerson from "../../assets/images/person.svg"
import Path from "../../assets/images/detail.svg"
import "./main.css"

const Mentor = () =>{
  return(
    <details className="mentor">
      <summary className="mentor-list">
        <img src={MentorPerson} alt="Mentor" />
        <strong className="mentor-title">Ism familya</strong>
        <img src={Path} alt="Path" />
      </summary>
      <div className="mentor-box">
        <input type="checkbox" name="" id="" />
        <p className="mentor-personname">Abdulla Azizov</p>
      </div>
    </details>
  )
}

export default Mentor;