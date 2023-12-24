import './mobileMenuStyle.css';
import PropTypes from 'prop-types';
import HomeIcon from '@mui/icons-material/Home';
import Face3Icon from '@mui/icons-material/Face3';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LaptopIcon from '@mui/icons-material/Laptop';
import { MaterialUISwitch } from '../../traductor/UISelector';
import 'animate.css';
import { useContext } from 'react';
import LanguageContext from '../../../hooks/useLanguage';

export const MobileMenu = ({isMobile, onClick, animationClass, menuIcon, homeClick, aboutClick, worksClick, TechClick}) => {
  const {texts} = useContext(LanguageContext);
  
  return (
    <div className={`${isMobile ? `mobileMenu__container ${animationClass}` : 'invisible'}`}>
        <div className="close__icon" onClick={onClick}>
            {menuIcon}
        </div>
        <li onClick={homeClick}>
            <HomeIcon className='mobile__icon'/>
            {texts.menuTitle1}
        </li>
        <li onClick={aboutClick}>
            <Face3Icon className='mobile__icon'/>
            {texts.menuTitle2}
        </li>
        <li onClick={worksClick}>
            <ListAltIcon className='mobile__icon'/>
            {texts.menuTitle3}
        </li>
        <li onClick={TechClick}>
            <LaptopIcon className='mobile__icon'/>
            {texts.menuTitle4}            
        </li>

        <li>
            <MaterialUISwitch />
        </li>
    </div>
  );
}

MobileMenu.propTypes = {
    onClick: PropTypes.any,
    isMobile: PropTypes.any,
    animationClass: PropTypes.any,
    menuIcon: PropTypes.any,
    homeClick: PropTypes.any,
    aboutClick: PropTypes.any,
    worksClick: PropTypes.any,
    TechClick: PropTypes.any,
};