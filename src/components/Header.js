import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as H from "../styles/HeaderStyle";

import headerLogo from "../img/header_logo_48px.png";

function MenuTrigger({ onClick, isActive, isVisible }) {
  return (
    <H.MenuTrigger onClick={onClick} className={isActive ? "active-7" : ""} $isVisible={isVisible}>
      <span></span>
      <span></span>
      <span></span>
    </H.MenuTrigger>
  );
}

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  const handleMenuClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeMenuClick = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    setDropdownVisible(false);
  }, [location]);

  return (
    <>
      <H.Header>
        <H.HeaderLogo onClick={() => handleNavLinkClick("/main")}>
          <img src={headerLogo} alt="찬란" />
        </H.HeaderLogo>
        <H.HeaderMenu onClick={handleMenuClick} $isVisible={isDropdownVisible}>
          <MenuTrigger onClick={handleMenuClick} isActive={isDropdownVisible} isVisible={isDropdownVisible} />
        </H.HeaderMenu>

        {isDropdownVisible && (
          <>
            <H.Background onClick={closeMenuClick} />
            <H.DropdownContainer $isVisible={isDropdownVisible}>
              <H.DropdownItem onClick={() => handleNavLinkClick("/noticeList")}>Notice</H.DropdownItem>
              <H.DropdownItem onClick={() => handleNavLinkClick("/map")}>Map</H.DropdownItem>
              <H.DropdownItem onClick={() => handleNavLinkClick("/review")}>Review</H.DropdownItem>
              <H.DropdownItem onClick={() => handleNavLinkClick("/timetable")}>Time Table</H.DropdownItem>
              <H.DropdownItem onClick={() => handleNavLinkClick("/photo")}>Photo</H.DropdownItem>
            </H.DropdownContainer>
          </>
        )}
      </H.Header>
    </>
  );
}

export default Header;
