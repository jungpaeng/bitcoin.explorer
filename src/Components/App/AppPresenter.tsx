import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Block from '../../Routes/Block';
import Blocks from '../../Routes/Blocks';
import Home from '../../Routes/Home';
import Transactions from '../../Routes/Transactions';
import Header from '../Header';

const AppContainer = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
`;

const AppPresenter: FC = () => (
  <BrowserRouter>
    <AppContainer>
      <Header>
        <Switch>
          <Route
            component={Home}
            exact={true}
            path="/"
          />
          <Route
            component={Blocks}
            exact={true}
            path="/blocks"
          />
          <Route
            component={Transactions}
            exact={true}
            path="/transactions"
          />
          <Route
            component={Block}
            path="/blocks/:index"
          />
          </Switch>
      </Header>
    </AppContainer>
  </BrowserRouter>
);

export default AppPresenter;
