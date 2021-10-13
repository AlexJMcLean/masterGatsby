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
  query PersonQuery {
    person: allSanityPerson {
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
