import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  const { children } = props;

  return <button className="container">{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["red"]),
};

Button.defaultProps = {
  color: "red",
};

export default Button;
