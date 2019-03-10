import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
`;

const AppPresenter = () => (
  <AppContainer>
    <BrowserRouter>
      {/** TODO */}
    </BrowserRouter>
  </AppContainer>
);

export default AppPresenter;
