import './technologiesStyle.css';
import htmlImg from '../../imgs/html3dIcon.webp';
import cssImg from '../../imgs/css3dIcon.webp';
import jsImg from '../../imgs/JS3dIcon.webp';
import reactImg from '../../imgs/react3dIcon.png';
import bootstrapImg from '../../imgs/bootstrap3dIcon.webp';
import pythonImg from '../../imgs/python3dIcon.webp';
import gitImg from '../../imgs/git3dIcon.webp';
import sqlImg from '../../imgs/sql3dIcon.png';
import uiImg from '../../imgs/materialUi3dImg.png';
import figmaImg from '../../imgs/figma3dicon.webp';
import { useContext } from 'react';
import LanguageContext from '../../hooks/useLanguage';
import { Zoom } from "react-awesome-reveal";

export const Technologies = () => {
  const {texts} = useContext(LanguageContext);
  const title = `<${texts.techTitle}/>`
  return (
    <div id='technologies__container'>
      <Zoom><h2 className='technologies__title'>{title}</h2></Zoom>
        <div className="tech__container" >
            <div className="technologie">
                <img src={htmlImg} alt="" />
                <h3>HTML</h3>
            </div>

            <div className="technologie">
                <img src={cssImg} alt="" />
                <h3>CSS</h3>
            </div>

            <div className="technologie">
                <img src={jsImg} alt="" />
                <h3>JavaScript</h3>
            </div>

            <div className="technologie">
                <img src={reactImg} alt="" />
                <h3>React.Js</h3>
            </div>

            <div className="technologie">
                <img src={bootstrapImg} alt="" />
                <h3>Bootsrap</h3>
            </div>


            <div className="technologie">
                <img src={pythonImg} alt="" />
                <h3>Python</h3>
            </div>

            <div className="technologie">
                <img src={gitImg} alt="" />
                <h3>Git</h3>
            </div>

            <div className="technologie">
                <img src={sqlImg} alt="" />
                <h3>MS SQL server</h3>
            </div>

            <div className="technologie">
                <img src={uiImg} alt="" />
                <h3>Material UI</h3>
            </div>

            <div className="technologie">
                <img src={figmaImg} alt="" />
                <h3>Figma</h3>
            </div>
        </div>
    </div>
  )
}
