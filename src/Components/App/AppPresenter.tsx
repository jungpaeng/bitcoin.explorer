import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';

const AppContainer = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
`;

const AppPresenter = () => (
  <BrowserRouter>
    <AppContainer>
      <Header>
        <h1>Header TEST</h1>
      </Header>
    </AppContainer>
  </BrowserRouter>
);

export default AppPresenter;
