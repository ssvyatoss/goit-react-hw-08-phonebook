import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #f5f5f5;
`;

const Headline = styled.nav`
  background-color: blueviolet;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  position: sticky;
  top: 0;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  &:last-child {
    margin-left: 20px;
  }
`;

const RegLog = styled.div`
  display: flex;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
`;

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavContainer>
      <Headline>
        <NavList className="bg-red-500">
          <NavItem>
            <LinkStyled to="/">Home</LinkStyled>
          </NavItem>
          {!isLoggedIn && (
            <RegLog>
              <NavItem>
                <LinkStyled to="/register">Register</LinkStyled>
              </NavItem>
              <NavItem>
                <LinkStyled to="/login">Login</LinkStyled>
              </NavItem>
            </RegLog>
          )}
          {isLoggedIn && (
            <>
              <NavItem>
                <LinkStyled to="/contacts">Contacts</LinkStyled>
              </NavItem>
              <NavItem>
                <UserMenu />
              </NavItem>
            </>
          )}
        </NavList>
      </Headline>
      <Outlet />
    </NavContainer>
  );
};
