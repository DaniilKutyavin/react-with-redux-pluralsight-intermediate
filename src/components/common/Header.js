import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  > * {
    border-right: 1px solid gray;
    padding: 0 5px;

    :last-child {
      border-right: none;
    }
  }
`;

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <Nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </Nav>
  );
};

export default Header;
