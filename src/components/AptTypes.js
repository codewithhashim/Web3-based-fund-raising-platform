import delux from "./assets/delux.png";
import studio from "./assets/studio.png";
import top_ from "./assets/top_.png";
import top_1 from "./assets/top_-1.png";
import "./assets/css/home/apt-types.css";

function AptTypes() {
  return (
    <section className="types">
      <div className="types-container">
        <div className="types-heading">
          <h3>
            How would you like your <br />
            <span>Dream Apartment</span>
          </h3>
          <p className="types-span">Select apartment types below</p>
        </div>
        <div className="types-boxes">
          <div className="types-box">
            <div className="types-box-img">
              <a href="/">
                <img src={delux} alt="" />
                <h4>Deluxe Apartment</h4>
              </a>
            </div>
          </div>
          <div className="types-box">
            <div className="types-box-img">
              <a href="/">
                <img src={top_} alt="" />
                <h4>Double Apartment</h4>
              </a>
            </div>
          </div>
          <div className="types-box">
            <div className="types-box-img">
              <a href="/">
                <img src={top_1} alt="" />
                <h4>Penthouse Apartment</h4>
              </a>
            </div>
          </div>
          <div className="types-box">
            <div className="types-box-img">
              <a href="/">
                <img src={studio} alt="" />
                <h4>Studio Apartment</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AptTypes;
