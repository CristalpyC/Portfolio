import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import './UiStyle.css'; 
import drImg from '../../imgs/DRFalg.png';
import usaImg from '../../imgs/USAFlag.png';
import { useContext, useEffect, useState } from "react";
import LanguageContext from '../../hooks/useLanguage';

export const MaterialUISwitch = () => {
  const [colorTheme, setColor] = useState('primary');
  const [auth, setAuth] = useState(true);
  const {texts, handleLanguage} = useContext(LanguageContext);

  const handleChange = (event) => {
    setAuth(event.target.checked);
    handleLanguage({ target: { value: event.target.checked ? 'en' : 'es' } });

    setColor(event.target.checked ? 'primary' : 'secondary');
  };

  useEffect(() => {
    setAuth(texts.portraitButton === 'Get to know me →');
    setColor(texts.portraitButton === 'Get to know me →' ? 'primary' : 'secondary');
  }, [texts.portraitButton]);

  return (
    <div className='switch__container'>
      <FormControlLabel
        control={
          <Switch
            checked={auth}
            onChange={handleChange}
            aria-label="language switch"
            color={colorTheme}
          />
        }
        label={
          <img
            src={auth ? usaImg : drImg}
            alt={texts.portraitButton === 'Get to know me →' ? 'en' : 'es'}
            className='switch__label-image'
          />
        }
      />
    </div>
  );
};