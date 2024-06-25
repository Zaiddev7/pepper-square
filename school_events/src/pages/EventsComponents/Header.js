import React from "react";
import SchoolLogo from "../../assets/images/SchoolLogo.svg";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Header() {
  return (
    <div className="header">
      <div className="navigator">
        <div className="linksContainer">
          <img src={SchoolLogo} alt="School Logo" />
          <div className="links">
            <p>The School</p>
            <p>Academics</p>
            <p>Life @ DBTR</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="buttons">
          <div className="buttonInActive">CSR</div>
          <div className="buttonActive">
            Donate
            <FavoriteIcon />
          </div>
        </div>
      </div>
      <div className="headerImage">
        <div className="headerTitle">Our events gallery</div>
        <div className="headerSubtitle">
          Events at DBTR are filled with joyous occasions, cultural gatherings,
          and learning opportunities that bring us all together.
        </div>
      </div>
    </div>
  );
}

export default Header;
