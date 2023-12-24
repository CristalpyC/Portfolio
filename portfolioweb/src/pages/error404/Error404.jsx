import "./404Style.css";
import error404 from "../../imgs/error404.png";
import { useContext } from "react";
import LanguageContext from "../../hooks/useLanguage";

export const Error404 = () => {
  const {texts} = useContext(LanguageContext);

  const handleClick = () => {
    window.history.back();
  }
  return (
    <>
      <div id="error__container">
        <img src={error404} alt="" />
        <button onClick={handleClick}>{texts.errorMessage}</button>
      </div>
    </>
  );
}
