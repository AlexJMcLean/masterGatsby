import { graphql } from "gatsby";
import React from "react";

export default function SlicemastersPage({ data }) {
  const person = data.person.nodes;
  return (
    <>
      <p>slicemasters!</p>
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
