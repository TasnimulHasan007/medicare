import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import useAuth from "../../hooks/useAuth"

const Div = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  a {
    padding: 0.5rem 1rem;
    font-weight: 500;
    color: var(--secondary-color);
    border-bottom: 0.125rem solid transparent;

    &:hover {
      color: var(--primary-color);
    }
    &.active {
      color: var(--primary-color);
      border-color: var(--primary-color);
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: var(--secondary-color);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #fff;
      border: none;
    }
  }
`

const RightNav = ({ open }) => {
  const { user, logOut } = useAuth()
  return (
    <Div open={open}>
      <NavLink exact to="/">
        Home
      </NavLink>

      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      {user.email ? (
        <>
          <p className="name">{user.displayName}</p>
          <button onClick={logOut} className="log-out">
            Log Out
          </button>
        </>
      ) : (
        <>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/register">Sign Up</NavLink>
        </>
      )}
    </Div>
  )
}

export default RightNav
