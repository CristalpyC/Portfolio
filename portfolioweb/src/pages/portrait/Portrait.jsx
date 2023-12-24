import { VideoBg } from "../../components/backgroundVideo/VideoBg"
import coolBg from "../../imgs/bg3.mp4";
import laptopImg from "../../imgs/image-laptop.png";
import { Link } from "react-router-dom"
import 'animate.css';
import "./porstraitStyle.css";
import { MaterialUISwitch } from "../../components/traductor/UISelector";
import { useContext } from "react";
import LanguageContext from "../../hooks/useLanguage";

export const Portrait = () => {
  const {texts} = useContext(LanguageContext);

  return (
    <>
    <div className="languageswitch__container">
      <MaterialUISwitch />
    </div>
    <div id="portrait">
    <VideoBg sourceVideo={coolBg}/>
    <div className="portrait__container">
        <div className="portrait__title animate__animated animate__pulse animate__repeat-2">
            <h1>{texts.portraitTitle1} <span>{texts.portraitTitle2}</span>
            <br />
            {texts.portraitTitle3}</h1>
            <Link to="/home"><button className="portrait__btn">{texts.portraitButton}</button></Link>
        </div>
        <div className="portrait__img animate__animated animate__pulse animate__repeat-2">
            <img src={laptopImg} alt="laptop" />
        </div>
    </div>
    </div>
  </>
  );
}
