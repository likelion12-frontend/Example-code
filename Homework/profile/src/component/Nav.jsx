import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import homeImg from "../assests/PORTFOLIO..svg";

export default function NavBar() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  }
  
  return (
    <div className="navBox">
      <div className="navContainer">
        <img src={homeImg} alt="homImg" className="homeImg" onClick={handleGoHome} />
        <ul type="none" className="liBox">
          <li>ABOUT</li>
          <li>GOAL</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>  
  )
}