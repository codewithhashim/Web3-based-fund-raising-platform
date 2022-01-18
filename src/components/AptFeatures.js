// import css
import "./assets/css/apt-features.css";
import parking from "./assets/parking.png";
import security from "./assets/security.png";
import health from "./assets/health.png";
import swimming from "./assets/swimming.png";

function AptFeatures() {
  return (
    <div className="apt-features">
      <div className="features-heading">
        <h3>Features</h3>
      </div>
      <div className="features-boxes">
        <div className="features-box">
          <div className="features-box-icon">
            <img src={parking} alt="" />
          </div>
          <div className="features-box-text">
            <h4>Parking Space</h4>
          </div>
        </div>
        <div className="features-box">
          <div className="features-box-icon">
            <img src={security} alt="" />
          </div>
          <div className="features-box-text">
            <h4>Parking Space</h4>
          </div>
        </div>
        <div className="features-box">
          <div className="features-box-icon">
            <img src={swimming} alt="" />
          </div>
          <div className="features-box-text">
            <h4>Parking Space</h4>
          </div>
        </div>
        <div className="features-box">
          <div className="features-box-icon">
            <img src={health} alt="" />
          </div>
          <div className="features-box-text">
            <h4>Parking Space</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AptFeatures;
