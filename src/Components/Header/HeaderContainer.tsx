import * as React from 'react';
import HeaderPresenter from './HeaderPresenter';

interface IProps {
  children: React.ReactNode;
}

const HeaderContainer: React.FC<IProps> = ({ children }) => (
  <HeaderPresenter>
    {children}
  </HeaderPresenter>
);

export default HeaderContainer;
