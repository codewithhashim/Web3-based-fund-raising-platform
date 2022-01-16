import "./assets/css/apt-plans.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import deluxeBp from "./assets/deluxbp.png";
import plans1 from "./assets/plans1.jpg"
import plans2 from "./assets/plans2.jpg"
import plans3 from "./assets/plans3.jpg"
import plans4 from "./assets/plans4.jpg"



function AptPlans() {
  return (
    <div className="apt-plans-container">
      <div className="apt-plans-header">
        <h2>Apartment Plans</h2>
      </div>
      <div className="apt-plans-body">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="The Studio">
            <div className="apt-plans-tab-container">
              <div className="apt-plans-tab-text">
                <h3 className="tab-sub-heading">The Studio</h3>
                <p className="tab-text">
                  Boasting chic interiors, three private balconies and a
                  remarkable terrace, this two bedroom apartment will epitomise
                  complete luxury. Not only will residents benefit from a superb
                  location in the heart of Shoreditch, but they will also enjoy
                  unrivalled facilities and a 24-hour bespoke concierge.
                </p>
                <p className="tabs-feature">
                  <ul>
                    <li>Total Area …………… 2000 Sq. Ft </li>
                    <li>Bedroom …………… 2000 Sq. Ft </li>

                    <li>Bathroom …………… 2000 Sq. Ft </li>

                    <li>Lounge …………… 2000 Sq. Ft </li>
                  </ul>
                </p>
              </div>
              <div className="apt-plans-tab-img">
                <img src={plans1} alt="" />
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Delux Portion">
            <div className="apt-plans-tab-container">
              <div className="apt-plans-tab-text">
                <h3 className="tab-sub-heading">Deluxe</h3>
                <p className="tab-text">
                  Boasting chic interiors, three private balconies and a
                  remarkable terrace, this two bedroom apartment will epitomise
                  complete luxury. Not only will residents benefit from a superb
                  location in the heart of Shoreditch, but they will also enjoy
                  unrivalled facilities and a 24-hour bespoke concierge.
                </p>
                <p className="tabs-feature">
                  <ul>
                    <li>Total Area …………… 2000 Sq. Ft </li>
                    <li>Bedroom …………… 2000 Sq. Ft </li>

                    <li>Bathroom …………… 2000 Sq. Ft </li>

                    <li>Lounge …………… 2000 Sq. Ft </li>
                  </ul>
                </p>
              </div>
              <div className="apt-plans-tab-img">
                <img src={deluxeBp} alt="" />
              </div>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Penthouse">
            <div className="apt-plans-tab-container">
              <div className="apt-plans-tab-text">
                <h3 className="tab-sub-heading">PentHouse</h3>
                <p className="tab-text">
                  Boasting chic interiors, three private balconies and a
                  remarkable terrace, this two bedroom apartment will epitomise
                  complete luxury. Not only will residents benefit from a superb
                  location in the heart of Shoreditch, but they will also enjoy
                  unrivalled facilities and a 24-hour bespoke concierge.
                </p>
                <p className="tabs-feature">
                  <ul>
                    <li>Total Area …………… 2000 Sq. Ft </li>
                    <li>Bedroom …………… 2000 Sq. Ft </li>

                    <li>Bathroom …………… 2000 Sq. Ft </li>

                    <li>Lounge …………… 2000 Sq. Ft </li>
                  </ul>
                </p>
              </div>
              <div className="apt-plans-tab-img">
                <img src={plans2} alt="" />
              </div>
            </div>
          </Tab>
          <Tab eventKey="garden" title="Top Garden">
            <div className="apt-plans-tab-container">
              <div className="apt-plans-tab-text">
                <h3 className="tab-sub-heading">Top Garden</h3>
                <p className="tab-text">
                  Boasting chic interiors, three private balconies and a
                  remarkable terrace, this two bedroom apartment will epitomise
                  complete luxury. Not only will residents benefit from a superb
                  location in the heart of Shoreditch, but they will also enjoy
                  unrivalled facilities and a 24-hour bespoke concierge.
                </p>
                <p className="tabs-feature">
                  <ul>
                    <li>Total Area …………… 2000 Sq. Ft </li>
                    <li>Bedroom …………… 2000 Sq. Ft </li>

                    <li>Bathroom …………… 2000 Sq. Ft </li>

                    <li>Lounge …………… 2000 Sq. Ft </li>
                  </ul>
                </p>
              </div>
              <div className="apt-plans-tab-img">
                <img src={plans3} alt="" />
              </div>
            </div>
          </Tab>
          <Tab eventKey="height" title="Double Height">
            <div className="apt-plans-tab-container">
              <div className="apt-plans-tab-text">
                <h3 className="tab-sub-heading">Double Height</h3>
                <p className="tab-text">
                  Boasting chic interiors, three private balconies and a
                  remarkable terrace, this two bedroom apartment will epitomise
                  complete luxury. Not only will residents benefit from a superb
                  location in the heart of Shoreditch, but they will also enjoy
                  unrivalled facilities and a 24-hour bespoke concierge.
                </p>
                <p className="tabs-feature">
                  <ul>
                    <li>Total Area …………… 2000 Sq. Ft </li>
                    <li>Bedroom …………… 2000 Sq. Ft </li>

                    <li>Bathroom …………… 2000 Sq. Ft </li>

                    <li>Lounge …………… 2000 Sq. Ft </li>
                  </ul>
                </p>
              </div>
              <div className="apt-plans-tab-img">
                <img src={plans4} alt="" />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default AptPlans;
