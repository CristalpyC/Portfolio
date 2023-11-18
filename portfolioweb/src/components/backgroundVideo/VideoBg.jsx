import "./videoStyle.css";
import PropTypes from 'prop-types';

export const VideoBg = ({sourceVideo}) => {
  return (
    <div className="video__background">
    <video autoPlay loop muted>
      <source src = {sourceVideo} type="video/mp4" />
      Tu navegador no soporta la reproducción de videos.
    </video>
  </div>
  );
}

VideoBg.propTypes = {
  sourceVideo: PropTypes.any.isRequired
};
