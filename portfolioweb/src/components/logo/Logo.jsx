import './logoStyle.css';
import logoImg from '../../imgs/logo.png';
import PropTypes from 'prop-types';

export const Logo = ({ logoClick }) => {
  return (
    <div className='logo__container'>
        <img src={logoImg} alt="logo" onClick={logoClick}/>
    </div>
  )
}

Logo.propTypes = {
  logoClick: PropTypes.any,
};
