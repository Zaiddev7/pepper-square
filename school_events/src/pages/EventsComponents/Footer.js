import React from "react";
import SchoolLogo from "../../assets/images/SchoolLogo.svg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PepperSquareLogo from "../../assets/images/PepperSquareLogo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerSecOne">
          <img
            src={SchoolLogo}
            alt="School Logo"
            className="footerSchoolLogo"
          />
          <div className="footerSecOneData">
            <div className="schoolTitle">
              DBTR National Higher Secondary School
            </div>
            <div className="schoolSubTitle">Virtuousness is Life</div>
            <div className="schoolDescription">
              Established in 1901, DBTR is situated in the temple town of
              Mayiladuthurai.
            </div>
          </div>
        </div>
        <div className="footerSecTwo">
          <div className="quicLinkTitle">Quick Links</div>
          <div className="quicLink">Admissions</div>
          <div className="quicLink">Alumni Association</div>
          <div className="quicLink">Donate</div>
          <div className="quicLink">Events</div>
        </div>
        <div className="footerSecTwo">
          <div className="quicLinkTitle">Contact</div>
          <div className="quicLink">
            DBTR NHSS, Mahadhana Street, Kamarajar Salai, Mayiladuthurai,
            Tamilnadu – 609001
          </div>
          <div className="quicLink">+91.436.422.3272</div>
          <div className="quicLink">contact@nationalhighschool.in</div>
        </div>
        <div className="footerSecTwo">
          <div className="impactTitle">
            Big or small, you can make an impact.
          </div>
          <div className="buttonActive">
            Donate
            <FavoriteIcon />
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerLeft">
          <div className="footerLeftTop">
            © DBTR 2023, All Rights Reserved | Sitemap
          </div>
          <div className="footerLeftBottom">
            <div className="footerLeftBottomText">Designed By</div>
            <img
              src={PepperSquareLogo}
              alt="Pepper Square Logo"
              className="PepperSquareLogoImg"
            />
          </div>
        </div>
        <div className="footerRight">
          <TwitterIcon />
          <LinkedInIcon />
          <InstagramIcon />
          <FacebookIcon />
          <YouTubeIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
