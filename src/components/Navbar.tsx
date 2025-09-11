import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaUser, FaEnvelope, FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #fff;
  color: #0984e3;
  position: fixed;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Logo = styled.a`
  font-size: 1.75rem;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
`;

// Styled components
const Menu = styled.ul<{ open: boolean }>`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #fff;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* so heading shows at the top */
    gap: 30px;
    padding-top: 40px;
    transition: left 0.3s ease;
  }
`;

const MenuHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #0984e3;
  margin-bottom: 20px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuItem = styled.li`
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 300px;

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    font-size: 1.5rem;
    flex-shrink: 0;
    width: 24px;
    text-align: center;
  }

  span {
    flex: 1;
  }

  /* Mobile adjustments: let item size to content and center it */
  @media (max-width: 768px) {
    width: auto;            /* allow it to shrink to content */
    max-width: none;
    margin: 0 auto;         /* center inside the parent */
    justify-content: center;
    span {
      flex: none;           /* don't stretch the text */
      white-space: nowrap;  /* prevent awkward wrapping; remove if you want wrapping */
    }
  }
`;


const IconRow = styled.div`
  display: flex;
  gap: 30px; /* space between GitHub & LinkedIn */
  margin-top: 10px;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <Logo href="#intro">Mahier</Logo>

      <Menu open={menuOpen}>
        <MenuHeading>Contact</MenuHeading>

        <MenuItem>
          <FaUser />
          <span>+82 010 4209 2304</span>
        </MenuItem>
        <MenuItem>
          <FaEnvelope />
          <span>mahier.sydow8@gmail.com</span>
        </MenuItem>

        <IconRow>
            <MenuItem>
            <a href="https://github.com/mahier8" target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
            </MenuItem>
            <MenuItem>
            <a href="https://www.linkedin.com/in/mahier-sydow-b4679166/" target="_blank" rel="noreferrer">
                <FaLinkedin />
            </a>
            </MenuItem>
        </IconRow>

      </Menu>

      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
    </Nav>
  );
};

export default Navbar;
