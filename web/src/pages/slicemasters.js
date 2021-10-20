import { graphql } from "gatsby";
import React from "react";
import Pagination from "../components/Pagination";
import SlicemasterList from "../components/SlicemasterList";

export default function SlicemastersPage({ data, pageContext }) {
  const persons = data.person.nodes;
  return (
    <>
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        skip={pageContext.skip}
        totalCount={data.person.totalCount}
        currentPage={pageContext.currentPage || 1}
        base={"/slicemasters"}
      />
      <SlicemasterList persons={persons} />
    </>
  );
}

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 6) {
    person: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        name
        description
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
