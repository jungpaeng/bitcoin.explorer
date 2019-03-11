import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuStatus = styled.input`
  display: none;

  &:checked {
    & ~ nav {
      width: 250px;

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

      & label[class="menu_state"] i::before {
        content: "\f053";
      }
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
  right: -8px;
  width: 15px;
  height: 15px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  font-size: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12),
              0 1px 2px rgba(0,0,0,0.24);
  transition: width 0.15s ease-in-out;

  &::before {
    margin-top: 2px;
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

const SLink = styled(Link)`
  position: relative;
  display: block;
  white-space: nowrap;
  width: 100%;
  height: 50px;
  color: #9aa3a8;
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

    &.fa {
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

interface IState {
  menuStatus: boolean;
}

class HeaderPresenter extends React.Component<any, IState> {
  public state: IState = {
    menuStatus: true,
  };

  public handleMenuStatus = () => {
    const { menuStatus } = this.state;
    this.setState({ menuStatus: !menuStatus });
  }

  public render() {
    const { menuStatus } = this.state;

    return(
      <>
        <MenuStatus
          type="checkbox"
          checked={menuStatus}
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
              <SLink to="">
                <i className="fa fa-inbox" />
                <Span>Item 1</Span>
              </SLink>
            </ListItem>
            <ListItem>
              <SLink to="">
                <i className="fa fa-heart" />
                <Span>Item 2</Span>
              </SLink>
            </ListItem>
          </List>
        </Nav>;
      </>
    );
  }
}

export default HeaderPresenter;
