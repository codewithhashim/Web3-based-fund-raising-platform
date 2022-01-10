import delux from "./assets/delux.png";
import studio from "./assets/studio.png";
import top_ from "./assets/top_.png";
import top_1 from "./assets/top_-1.png";

function Types() {
  return (
    <section className="types">
      <div className="types-container">
        <div className="types-heading">
          <h3>
            How would you like your <br />
            Dream Apartment
          </h3>
          <span className="types-span">Select apartment types below</span>
        </div>
        <div className="types-boxes">
          <div className="types-box">
            <div className="types-box-img">
              <img src={delux} alt="" />
              <h4>Deluxe Apartment</h4>
            </div>
          </div>
          <div className="types-box">
            <div className="types-box-img">
              <img src={top_} alt="" />
              <h4>Double Apartment</h4>
            </div>
          </div>
          <div className="types-box">
            <div className="types-box-img">
              <img src={top_1} alt="" />
              <h4>Penthouse Apartment</h4>
            </div>
          </div>
          <div className="types-box">
            <div className="types-box-img">
              <img src={studio} alt="" />
              <h4>Studio Apartment</h4>
            </div>
          </div>
        </div>
        <div className="types-btn">
          <a href="/">Continue</a>
        </div>
      </div>
    </section>
  );
}

export default Types;
