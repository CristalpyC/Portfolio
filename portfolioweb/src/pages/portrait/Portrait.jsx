import { VideoBg } from "../../components/backgroundVideo/VideoBg"
import coolBg from "../../imgs/bg3.mp4";
import laptopImg from "../../imgs/image-laptop.png";
import { Link } from "react-router-dom"
import 'animate.css';

import "./porstraitStyle.css";

export const Portrait = () => {
  return (
    
    <div id="portrait">
    <VideoBg sourceVideo={coolBg}/>
    <div className="portrait__container">
      {/*<div className="portrait__img invisible">
            <img src={laptopImg} alt="laptop" />
  </div>*/}
        <div className="portrait__title animate__animated animate__pulse animate__repeat-2">
            <h1>HI! I’m <span>Cristal,</span>
            <br />
            web developer</h1>
            <Link to="/home"><button className="portrait__btn">Get to know me →</button></Link>
        </div>
        <div className="portrait__img animate__animated animate__pulse animate__repeat-2">
            <img src={laptopImg} alt="laptop" />
        </div>
    </div>
    </div>
  )
}
