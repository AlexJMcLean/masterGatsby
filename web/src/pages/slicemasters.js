import { graphql } from "gatsby";
import React from "react";
import SlicemasterList from "../components/SlicemasterList";

export default function SlicemastersPage({ data }) {
  const persons = data.person.nodes;
  return (
    <>
      <SlicemasterList persons={persons} />
    </>
  );
}

export const query = graphql`
  query ($skip: Int = 0, $pageSize: Int = 6) {
    person: allSanityPerson (limit: $pageSize, skip: $skip) {
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
