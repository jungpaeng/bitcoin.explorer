import React, { FC } from 'react';
import HomePresenter, { IHomeProps } from './HomePresenter';

const HomeContainer: FC<IHomeProps> = (props: IHomeProps) => (
  <HomePresenter {...props} />
);

export default HomeContainer;
