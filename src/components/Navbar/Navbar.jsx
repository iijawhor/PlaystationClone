import React from "react";
import "./Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
const Navbar = () => {
  return (
    <section className="Navabr">
      <div className="navbarContainer">
        <img src="./assets/playstationLogo.png" alt="" className="NavbarLogo" />
        <div className="navbarContainerItemsContainer">
          <ul className="navbarContainerItems">
            <li className="navbarItem">
              <a href="">
                Games <KeyboardArrowDownIcon className="navbarItemIcon" />
              </a>
            </li>

            <li className="navbarItem">
              <a href="">
                PS5 <KeyboardArrowDownIcon className="navbarItemIcon" />
              </a>
            </li>

            <li className="navbarItem">
              <a href="">
                PS4 <KeyboardArrowDownIcon className="navbarItemIcon" />
              </a>
            </li>

            <li className="navbarItem">
              <a href="">
                Services <KeyboardArrowDownIcon className="navbarItemIcon" />
              </a>
            </li>

            <li className="navbarItem">
              <a href="">
                Accessories <KeyboardArrowDownIcon className="navbarItemIcon" />
              </a>
            </li>

            <li className="navbarItem">
              <a href="">
                News <KeyboardArrowDownIcon className="navbarItemIcon" />
              </a>
            </li>
            <li className="navbarItem">
              <a href="">
                Store <KeyboardArrowDownIcon className="navbarItemIcon" />
              </a>
            </li>

            <li className="navbarItem">
              <a href="">
                Support <KeyboardArrowDownIcon className="navbarItemIcon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="navbarAuthentication">
          <p>Sign In</p>
        </div>
        {/* <div className="navbarContainerItems"> */}
        <div className="navbarSearch">
          <MenuRoundedIcon className="navbarMenuIcon" />
          <SearchRoundedIcon className="navbarSearchIcon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
