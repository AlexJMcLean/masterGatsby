import React from "react";
import { graphql } from "gatsby";

import BeerList from "../components/BeerList";

export default function BeersPage({ data }) {
  const beers = data.beers.nodes;
  return (
    <>
      <BeerList beers={beers} />
    </>
  );
}

export const query = graphql`
  query BeersQuery {
    beers: allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          average
          reviews
        }
      }
    }
  }
`;
