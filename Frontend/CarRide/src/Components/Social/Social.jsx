import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Social.css";

const Social = () => {
  return (
    <div className="social">
      <a href="#a">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#a">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="#a">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#a">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};

Social.propTypes = {
  activeWidth: PropTypes.number,
};

export default Social;
