import React, { FC } from 'react';
import BlocksPresenter, { IBlockProps } from './BlocksPresenter';

const BlocksContainer: FC<IBlockProps> = (props: IBlockProps) => (
  <BlocksPresenter {...props} />
);

export default BlocksContainer;
