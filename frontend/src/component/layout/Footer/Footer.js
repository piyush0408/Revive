import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Github</h4>
        {/* <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" /> */}
      </div>

      <div className="midFooter">
        <h2>Polymer</h2>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Piyushlohiya</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://google.com">Instagram</a>
        <a href="https://google.com">Youtube</a>
        <a href="https://google.com">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
