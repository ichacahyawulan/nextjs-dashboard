import React from 'react';
import { usePagination, DOTS } from './usePagination';
import styles from '../styles/pagination.module.scss'

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });
  
  // hide pagination if page total < 2
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  // conditional style based on page condition
  const getFirstPageStyle = () => {
    if (currentPage === 1) return styles.disabled;
  };

  const getSelectedStyle = (pageNumber) => {
    if (pageNumber === currentPage) return styles.selected;
  };

  const getLastPageStyle = () => {
    if (currentPage === lastPage) return styles.disabled;
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={`${styles["pagination-container"]} ${styles["pagination-bar"]}`}
      style={{margin: "0px", padding:"0px"}}
    >
      <li
        className={`${styles["pagination-item"]} ${getFirstPageStyle()}`}
        onClick={onPrevious}
        key={"prev"}
      >
        <div className={`${styles.arrow} ${styles.left}`} />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li className={`${styles["pagination-item"]} ${styles.dots}`} key={"dots" + index}>&#8230;</li>;
        }

        return (
          <li
            className={`${styles["pagination-item"]} ${getSelectedStyle(pageNumber)}`}
            onClick={() => onPageChange(pageNumber)}
            key={"page" + index}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`${styles["pagination-item"]} ${getLastPageStyle()}`}
        onClick={onNext}
        key={"next"}
      >
        <div className={`${styles.arrow} ${styles.right}`} />
      </li>
    </ul>
  );
};

export default Pagination;
