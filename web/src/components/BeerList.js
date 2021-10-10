import React from "react";
import styled from "styled-components";

const BeerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
  border: solid 1px black;
  padding: 2rem 0;

  img {
    max-width: 200px;
    margin-bottom: 1rem;
  }
`;

const BeerListStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
`;

function SingleBeer({ beer }) {
  return (
    <BeerStyles>
      {beer.image ? <img src={beer.image} alt={beer.name} /> : ""}
      <h2>{beer.name}</h2>
      <p>{beer.price}</p>
      {beer.rating.average}
      <span>({beer.rating.reviews})</span>
    </BeerStyles>
  );
}

export default function BeerList({ beers }) {
  return (
    <BeerListStyles>
      {beers.map((beer) => (
        <SingleBeer key={beer.id} beer={beer} />
      ))}
    </BeerListStyles>
  );
}
