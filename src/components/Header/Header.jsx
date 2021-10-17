import Burger from "./Burger"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;

  .logo {
    font-size: 1.5rem;
    color: var(--secondary-color);
    font-weight: 500;
    cursor: pointer;

    span {
      color: var(--primary-color);
    }
  }
`

const Header = () => {
  return (
    <Container>
      <Nav>
        <NavLink exact to="/" className="logo">
          <span>
            <i className="fas fa-heartbeat"></i> Medi
          </span>
          Care
        </NavLink>
        <Burger />
      </Nav>
    </Container>
  )
}

export default Header
