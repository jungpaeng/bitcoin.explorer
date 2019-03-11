import React, { FC } from 'react';
import HeaderPresenter from './HeaderPresenter';

interface IProps {
  children: React.ReactNode;
}

const HeaderContainer: FC<IProps> = ({ children }) => (
  <HeaderPresenter>
    {children}
  </HeaderPresenter>
);

export default HeaderContainer;
