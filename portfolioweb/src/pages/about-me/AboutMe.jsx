import './aboutmeStyle.css';
import profilePic from '../../imgs/fondo-cv-opcion2.png';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LanguageContext from '../../hooks/useLanguage';
import { useContext } from 'react';

export const AboutMe = () => {
  const {texts} = useContext(LanguageContext);

  return (
    <div id='about__container'>
      <div className="profilepic__container">
          <img src={profilePic} alt="profile pic" />
      </div>
      <div className="me__container">
          <h2>Cristal Melissa Tavárez Novas</h2>
          <p>{texts.aboutTitle}</p>
          <p>{texts.aboutTitle2}</p>
          <div className="goal__container">
            <h3>
              <EmojiEventsIcon className='goal__icon'/>
              {texts.goalTitle}: <span>{texts.goalTitle2}</span>
            </h3>
          </div>
          <hr />
          <button>{texts.cvTitle}</button>
      </div>
    </div>
  )
}
