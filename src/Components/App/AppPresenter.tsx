import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';
import Blocks from '../Routes/Blocks';
import Home from '../Routes/Home';
import Transactions from '../Routes/Transactions';

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
            exact={true}
            path={'/'}
            component={Home}
          />
          <Route
            exact={true}
            path={'/blocks'}
            component={Blocks}
          />
          <Route
            exact={true}
            path={'/transactions'}
            component={Transactions}
          />
        </Switch>
      </Header>
    </AppContainer>
  </BrowserRouter>
);

export default AppPresenter;
