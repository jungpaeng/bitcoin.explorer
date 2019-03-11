import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { IBlock, ITransaction } from '../../@types/block';
import Blocks from '../../Routes/Blocks';
import Home from '../../Routes/Home';
import Transactions from '../../Routes/Transactions';
import Header from '../Header';

const AppContainer = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
`;

interface IProps {
  blocks: IBlock[];
  isLoading: boolean;
  transactions: ITransaction[];
}

const AppPresenter: FC<IProps> = ({ blocks, isLoading, transactions }) => (
  <BrowserRouter>
    <AppContainer>
      <Header>
        {!isLoading && (
          <Switch>
            <Route
              exact={true}
              path={'/'}
              render={() => (
                <Home
                  blocks={blocks.slice(0, 5)}
                  transactions={transactions.slice(0, 5)}
                />
              )}
            />
            <Route
              exact={true}
              path={'/blocks'}
              render={() => (
                <Blocks blocks={blocks} />
              )}
            />
            <Route
              exact={true}
              path={'/transactions'}
              render={() => (
                <Transactions transactions={transactions} />
              )}
            />
          </Switch>
        )}
      </Header>
    </AppContainer>
  </BrowserRouter>
);

export default AppPresenter;
