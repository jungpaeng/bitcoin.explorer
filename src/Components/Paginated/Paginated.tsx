import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const PaginatedContainer = styled.div`
  & .paginated-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    & li {
      margin: 0;
      border: 1px solid #dadada;
      background: #fff;
      color: #768a94;

      &:not(:last-child) {
        border-right: none;
      }

      & a {
        cursor: pointer;
        display: flex;
        justify-content: center;
        padding: 10px 10px;
        width: 100%;
        height: 100%;
        user-select: none;
      }

      &.selected {
        background: #3582b4;
        color: #fff
      }
    }
  }
`;

interface IProps {
  pageCount: number;
  onPageChange: (currentPage: number) => void;
}

const Paginated: FC<IProps> = ({ pageCount, onPageChange }) => (
  <PaginatedContainer>
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={2}
      marginPagesDisplayed={3}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      previousLabel="Prev"
      nextLabel="Next"
      containerClassName="paginated-container"
    />
  </PaginatedContainer>
);

export default Paginated;
