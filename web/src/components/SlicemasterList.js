import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const SlicemasterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
`;

const SlicemasterStyles = styled.div`
  background-color: black;
`;

function SingleSlicemaster({ person }) {
  return (
    <SlicemasterStyles key={person.id}>
      <h2>
        <span class="mark">{person.name}</span>
      </h2>
      <Img fluid={person.image.asset.fluid} alt={person.name} />
      <p>{person.description}</p>
    </SlicemasterStyles>
  );
}

export default function SlicemasterList({ persons }) {
  return (
    <SlicemasterGrid>
      {persons.map((person) => (
        <SingleSlicemaster person={person} />
      ))}
    </SlicemasterGrid>
  );
}
