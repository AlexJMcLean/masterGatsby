import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const PaginationStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid var(--grey);
  margin: 2rem 0;
  border-radius: 5px;
  & > * {
    flex: 1;
    padding: 1rem;
    border-right: 1px solid var(--grey);
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--red);
    }
    &[disabled] {
      pointer-events: none;
      color: var(--grey);
    }
  }
`;

export default function Pagination({
  pageSize,
  currentPage,
  totalCount,
  base,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  return (
    <PaginationStyles>
      <Link disabled={!hasPrevPage} to={`${base}/${prevPage}`}>
        &#8592; Prev
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          className={currentPage === 1 && i === 0 ? "current" : ""}
          to={`${base}/${i + 1}`}
        >
          {i + 1}
        </Link>
      ))}
      <Link disabled={!hasNextPage} to={`${base}/${nextPage}`}>
        Next &#8594;
      </Link>
    </PaginationStyles>
  );
}
