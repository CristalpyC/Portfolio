import { useContext } from 'react';
import './footerStyle.css';
import LanguageContext from '../../hooks/useLanguage';

export const Footer = () => {
  const {texts} = useContext(LanguageContext);
  return (
    <div id='footer__container'>
      {`© 2024 Cristal Tavárez Novas. ${texts.footerTitle}.`}
    </div>
  )
}
