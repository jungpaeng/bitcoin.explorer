import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Blocks from '../../Routes/Blocks';
import Home from '../../Routes/Home';
import Transactions from '../../Routes/Transactions';
import Header from '../Header';

const AppContainer = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
`;

interface IProps {
  isLoading: boolean;
}

const AppPresenter: FC<IProps> = ({ isLoading }) => (
  <BrowserRouter>
    <AppContainer>
      <Header>
        {!isLoading && (
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
        )}
      </Header>
    </AppContainer>
  </BrowserRouter>
);

export default AppPresenter;
