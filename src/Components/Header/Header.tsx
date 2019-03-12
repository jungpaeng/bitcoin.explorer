import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuStatus = styled.input`
  display: none;

  &:checked {
    & ~ nav {
      width: 250px;

      & label[class="menu_state"] i::before {
        margin-right: 3px;
        content: "\f053";
      }

      & ul {
        width: 100%;
        & li a i {
          border-right: 1px solid #2f343e;
        }
        & li a span {
          opacity: 1;
          transition: opacity 0.25s ease-in-out;
        }
      }
    }

    & ~ main {
      margin-left: 250px;
      width: calc(100% - 250px);
    }
  }
`;

const MenuStateIcon = styled.i`
  position: absolute;
  z-index: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: -13px;
  width: 25px;
  height: 25px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  font-size: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12),
              0 1px 2px rgba(0,0,0,0.24);
  transition: width 0.15s ease-in-out;

  &::before {
    line-height: 25px;
    content: "\f054";
  }

  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19),
                0 6px 6px rgba(0,0,0,0.23);
  }
`;

const Nav = styled.nav`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  bottom: 0;
  background: #383e49;
  color: #9aa3a8;
  width: 50px;
  transition: all 0.15s ease-in-out;
`;

const List = styled.ul`
  overflow: hidden;
  display: block;
  list-style-type: none;
  width: 50px;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  border: 1px solid #2f343e;
  position: relative;
  margin: 0;

  &:not(:last-child) {
    border-bottom: none;
  }
`;

interface ISLink {
  isActive: boolean;
}

const SLink = styled(Link)`
  position: relative;
  display: block;
  white-space: nowrap;
  width: 100%;
  height: 50px;
  background: ${(props: ISLink) => (props.isActive && '#4c515d')};
  color: ${(props: ISLink) => (props.isActive ? '#fff' : '#9aa3a8')};
  transition: all 0.15s ease-in-out;

  &:hover {
    background: #4c515d;
    color: #fff;
  }

  & * {
    height: 100%;
    display: inline-block;
  }

  & i {
    text-align: center;
    width: 50px;
    z-index: 999999;

    &.fas {
      line-height: 50px;
    }
  }
`;

const Span = styled.span`
  opacity: 0;
  padding-left: 25px;
  line-height: 50px;
  transition: opacity 0.1s ease-in-out;
`;

const Main = styled.main`
  width: calc(100% - 50px);
  height: 100%;
  transition: all 0.15s ease-in-out;
  margin-left: 50px;
  padding: 30px;
`;

interface IProps {
  children: ReactNode;
}

interface IState {
  menuStatus: boolean;
}

class Header extends Component<IProps, IState> {
  public state: IState = {
    menuStatus: true,
  };

  public handleMenuStatus = () => {
    const { menuStatus } = this.state;
    this.setState({ menuStatus: !menuStatus });
  }

  public render() {
    const { children } = this.props;
    const { menuStatus } = this.state;

    if (typeof window === 'undefined') {
      return null;
    }

    return(
      <>
        <MenuStatus
          type="checkbox"
          checked={menuStatus}
          readOnly={true}
        />
        <Nav>
          <label
            className="menu_state"
            onClick={this.handleMenuStatus}
          >
            <MenuStateIcon className="fa" />
          </label>
          <List>
            <ListItem>
              <SLink
                isActive={window.location.pathname === '/'}
                to="/"
              >
                <i className="fas fa-home" />
                <Span>Home</Span>
              </SLink>
            </ListItem>
            <ListItem>
              <SLink
                isActive={window.location.pathname === '/blocks'}
                to="/blocks"
              >
                <i className="fas fa-square" />
                <Span>Blocks</Span>
              </SLink>
            </ListItem>
            <ListItem>
              <SLink
                isActive={window.location.pathname === '/transactions'}
                to="/transactions"
              >
                <i className="fas fa-dollar-sign" />
                <Span>Transactions</Span>
              </SLink>
            </ListItem>
          </List>
        </Nav>
        <Main>
          {children}
        </Main>
      </>
    );
  }
}

export default Header;
