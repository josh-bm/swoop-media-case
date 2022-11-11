import React from "react";
import styled from "styled-components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <FlexBox>
      <section className="children">{children}</section>

      <NavBar>
        <NavLinks href="#">
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </NavLinks>
        <NavLinks href="#">
          <i className="fa-solid fa-bag-shopping"></i>
          <span>Shop</span>
        </NavLinks>
        <NavLinks href="#">
          <i className="fa-solid fa-store"></i>
          <span>Marketplace</span>
        </NavLinks>
        <NavLinks href="#">
          <i className="fa-brands fa-ethereum"></i>
          <span>Dexicon</span>
        </NavLinks>
      </NavBar>
    </FlexBox>
  );
}

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    nav {
      order: 1;
    }

    .children {
      order: 2;
    }

    i {
      display: none;
    }
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  margin: 0 auto;
  border-top: 1px solid var(--light-blue-line);
  background-color: var(--dark-blue-bg);

  @media (min-width: 768px) {
    position: initial;
    width: 25%;
    font-size: 2em;
  }
`;

const NavLinks = styled.a`
  text-decoration: none;
  color: var(--mustard-yellow-text);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  width: 25%;

  i {
    margin-bottom: 0.2em;
  }

  @media (min-width: 768px) {
    width: 100%;
    padding: 1em 1em 0 1em;
  }
`;
