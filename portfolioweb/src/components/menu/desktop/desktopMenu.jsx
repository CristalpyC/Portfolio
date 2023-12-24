import { Logo } from "../../logo/Logo";
import "./desktopMenuStyle.css";
import { NavLink} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import CloseIcon from '@mui/icons-material/Close';
import { MaterialUISwitch } from "../../traductor/UISelector";
import { MobileMenu } from "../mobile/mobileMenu";
import { useEffect, useState, useContext } from "react";
import 'animate.css';
import LanguageContext from "../../../hooks/useLanguage";

export const DesktopMenu = () => {
  const [seeMenu, setMenu] = useState(false);
  const [icon, setIcon] = useState(<CloseIcon />)
  const animation = 'animate__animated animate__slideInRight';
  const [clickedItem, setClickedItem] = useState(null);
  const {texts} = useContext(LanguageContext);

  const handleMenuOpen = () => {
    setMenu(!seeMenu);
    
  }

  const handleLiClick = (itemName) => {
    setClickedItem(itemName);

    if (itemName === 'About Me') {
      const sectionElement = document.getElementById('about__container');

      if (sectionElement) {
        const offset = 160;  
        const elementPosition = sectionElement.offsetTop - offset;

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
      }
    } else {
      const sectionElement = document.getElementById(`${itemName.toLowerCase()}__container`);

      if (sectionElement) {
        const offset = 60;  // Ajusta según sea necesario para tener en cuenta la barra de navegación o cualquier otro elemento fijo en la parte superior
        const elementPosition = sectionElement.offsetTop - offset;

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
        
      }
    }

    setMenu(false)
  };

  const handleClose = () => {
    setMenu(false);
    setTimeout(() => {
        setIcon(<HorizontalRuleIcon />)

        setTimeout(() => {
          setIcon(<CloseIcon />)
        }, 1000)
    }, 500)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 650) {
        setMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  

  return (
    <>
    <header id="menu">
        <div className="logo">
          <Logo logoClick={() => handleLiClick('Home')}/>
        </div>

        {/*Mobile menu*/}
          <MobileMenu
            isMobile={seeMenu}
            onClick={handleClose}
            animationClass={animation}
            menuIcon={icon}
            homeClick={() => handleLiClick('Home')}
            aboutClick={() => handleLiClick('About Me')}
            worksClick={() => handleLiClick('Works')}
            TechClick={() => handleLiClick('Technologies')}
          />
      
        <div className="menu__items">
          <ul>
            <NavLink><li className={clickedItem === 'Home' ? 'active__link not__active' : 'link__menu'} onClick={() => handleLiClick('Home')}>{texts.menuTitle1}</li></NavLink>
            <NavLink><li className={clickedItem === 'About Me' ? 'active__link not__active' : 'link__menu'} onClick={() => handleLiClick('About Me')}>{texts.menuTitle2}</li></NavLink>
            <NavLink><li className={clickedItem === 'Works' ? 'active__link not__active' : 'link__menu'} onClick={() => handleLiClick('Works')}>{texts.menuTitle3}</li></NavLink>
            <NavLink><li className={clickedItem === 'Technologies' ? 'active__link not__active' : 'link__menu'} onClick={() => handleLiClick('Technologies')}>{texts.menuTitle4}</li></NavLink>
            <li className="language__selector"><MaterialUISwitch /></li>
            <li className="burger__icon" onClick={handleMenuOpen}><MenuIcon /></li>
          </ul>
        </div>
    </header>
    </>
  )
}
