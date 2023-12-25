import './projectStyle.css';
import { useContext } from 'react';
import arcaneImg from '../../imgs/arcaneMockup.png';
import turisteoImg from '../../imgs/turistMockup.png';
import identityImg from '../../imgs/identityMockup.png';

import LanguageContext from '../../hooks/useLanguage';

export const Projects = () => {
  const {texts} = useContext(LanguageContext);

  const title = `<${texts.projectTitle}/>`
  return (
    <div id='works__container'>
        <h2 className='project__title'>{title}</h2>
        <div className='projectinfo__container'>
            <div className="projects">
                <div>
                    <h2>{texts.projectTitle1}</h2>
                    <h3>{texts.projectName1}</h3>
                    <p>{texts.projectDesc1}</p>
                    <a href="https://estefanisoto.github.io/"><p className='demo__title'>→ {texts.projectView}</p></a>
                </div>
                <div>
                    <img src={arcaneImg} alt="" />
                </div>
            </div>

            <div className="projects2">
                 <div>
                    <img src={turisteoImg} alt="" />
                </div>
                <div>
                    <h2>{texts.projectTitle2}</h2>
                    <h3>{texts.projectName2}</h3>
                    <p>{texts.projectDesc2}</p>
                    <a href="https://youtu.be/XO6gH31xtRE"><p className='demo__title'>→ {texts.projectView}</p></a>
                </div>
            </div>

            <div className="projects">
                <div>
                    <h2>{texts.projectTitle3}</h2>
                    <h3>{texts.projectName3}</h3>
                    <p>{texts.projectDesc3}</p>
                    <a href="https://youtu.be/jhqk-KX_Gw0"><p className='demo__title'>→ {texts.projectView}</p></a>
                </div>
                <div>
                    <img src={identityImg} alt="" />
                </div>
            </div>

            <div className="projects2">
                 <div>
                    <img src={turisteoImg} alt="" />
                </div>
                <div>
                    <h2>{texts.projectTitle4}</h2>
                    <h3>{texts.projectName4}</h3>
                    <p>{texts.projectDesc4}</p>
                    <a href="https://youtu.be/XO6gH31xtRE"><p className='demo__title'>→ {texts.projectView}</p></a>
                </div>
            </div>
        </div>
    </div>
  );
}
