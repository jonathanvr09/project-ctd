import "./Logo.css";

const Logo = () => {
  return (
    <a href="/" className="link">
      <img className="image" src="/logo.png" alt="Logo CarRide" />
      <h3 className="h3">
        <span className="companyName">CarRide</span>
        <span className="subtitle">Alcanza tus metas</span>
      </h3>
    </a>
  );
};

export default Logo;
