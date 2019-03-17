import React, { FC } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { URL_ADDRESS, URL_BLOCKS, URL_TRANSACTIONS } from '../../contants';
import Address from '../../Routes/Address';
import Block from '../../Routes/Block';
import Blocks from '../../Routes/Blocks';
import Home from '../../Routes/Home';
import Transaction from '../../Routes/Transaction';
import Transactions from '../../Routes/Transactions';
import Header from '../Header';

const AppContainer = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
`;

const AppPresenter: FC = () => (
  <HashRouter>
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
            path={`/${URL_BLOCKS}`}
          />
          <Route
            component={Transactions}
            exact={true}
            path={`/${URL_TRANSACTIONS}`}
          />
          <Route
            component={Block}
            path={`/${URL_BLOCKS}/:index`}
          />
          <Route
            component={Transaction}
            path={`/${URL_TRANSACTIONS}/:id`}
          />
          <Route
            component={Address}
            path={`/${URL_ADDRESS}/:address`}
          />
          </Switch>
      </Header>
    </AppContainer>
  </HashRouter>
);

export default AppPresenter;
