import React from "react";
import styled from "styled-components";

const BeerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 1px var(--grey);
  padding: 2rem 1rem;
  text-align: center;
  img {
    max-width: 100%;
    height: 200px;
    margin-bottom: 1rem;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;

const BeerListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

function SingleBeer({ beer }) {
  const rating = Math.round(beer.rating.average);
  const noStar = 5 - rating;
  return (
    <BeerStyles>
      {beer.image ? <img src={beer.image} alt={beer.name} /> : ""}
      <h2>{beer.name}</h2>
      <p>{beer.price}</p>
      <p title={`${rating} out of 5 stars`}>
        {`⭐`.repeat(rating)}
        <span style={{ filter: "grayscale(100%)" }}>
          {`⭐`.repeat(5 - rating)}
        </span>
        <span>({beer.rating.reviews})</span>
      </p>
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
