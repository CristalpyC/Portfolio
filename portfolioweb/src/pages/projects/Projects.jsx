import './projectStyle.css';
import { useContext } from 'react';
import arcaneImg from '../../imgs/arcaneMockup.png';
import turisteoImg from '../../imgs/turistMockup.png';
import identityImg from '../../imgs/identityMockup.png';
import searchImg from '../../imgs/searchmockup.png';
import { Zoom, JackInTheBox } from "react-awesome-reveal";
import LanguageContext from '../../hooks/useLanguage';
import mascotalandMockup from '../../imgs/mascotaland-mockup.png';

export const Projects = () => {
  const {texts} = useContext(LanguageContext);

  const title = `<${texts.projectTitle}/>`
  return (
    <div id='works__container'>
        <Zoom><h2 className='project__title'>{title}</h2></Zoom>
        <div className='projectinfo__container'>
            <div className="projects">
                <div>
                    <h2>{texts.projectTitle1}</h2>
                    <h3>{texts.projectName1}</h3>
                    <p>{texts.projectDesc1}</p>
                    <a href="https://estefanisoto.github.io/"><p className='demo__title'>→ {texts.projectView}</p></a>
                </div>
                <div>
                    <JackInTheBox><img src={arcaneImg} alt="" /></JackInTheBox>
                </div>
            </div>

            <div className="projects2">
                 <div>
                    <JackInTheBox><img src={turisteoImg} alt="" /></JackInTheBox>
                </div>
                <div>
                    <h2>{texts.projectTitle2}</h2>
                    <h3>{texts.projectName2}</h3>
                    <p>{texts.projectDesc2}</p>
                    <a href="https://turisteo-explore-site.netlify.app/"><p className='demo__title'>→ {texts.projectView}</p></a>
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
                    <JackInTheBox><img src={identityImg} alt="" /></JackInTheBox>
                </div>
            </div>

            <div className="projects2">
                 <div>
                    <JackInTheBox><img src={searchImg} alt="" /></JackInTheBox>
                </div>
                <div>
                    <h2>{texts.projectTitle4}</h2>
                    <h3>{texts.projectName4}</h3>
                    <p>{texts.projectDesc4}</p>
                    <a href="https://remarkable-liger-bc2fe5.netlify.app/"><p className='demo__title'>→ {texts.projectView}</p></a>
                </div>
            </div>

            <div className="projects">
                <div>
                    <h2>{texts.projectTitle5}</h2>
                    <h3>{texts.projectName5}</h3>
                    <p>{texts.projectDesc5}</p>
                    <a href="https://mascotaland-flax.vercel.app/inicio"><p className='demo__title'>→ {texts.projectView}</p></a>
                </div>
                <div>
                    <JackInTheBox><img src={mascotalandMockup} alt="" /></JackInTheBox>
                </div>
            </div>

            <div className="projects2">
                 <div>
                    <JackInTheBox><img src="ecorevMockup.png" alt="" /></JackInTheBox>
                </div>
                <div>
                    <h2>{texts.projectTitle6}</h2>
                    <h3>{texts.projectName6}</h3>
                    <p>{texts.projectDesc6}</p>
                    <a href="https://ecorev-shop-cristaltech.vercel.app/"><p className='demo__title'>→ {texts.projectView}</p></a>
                </div>
            </div>
        </div>
    </div>
  );
}
