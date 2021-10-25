import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link } from "gatsby";

const SlicemasterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 4rem;
`;

const SlicemasterStyles = styled.div`
  a {
    text-decoration: none;
  }
  h2 {
    font-size: 4rem;
    transform: rotate(-2deg);
    margin-bottom: -2rem;
    position: relative;
    z-index: 1;
    text-align: center;
  }
  .gatsby-image-wrapper {
    height: 400px;
  }
  p {
    width: 80%;
    text-align: center;
    position: relative;
    margin: -2rem auto 0;
    background-color: var(--yellow);
    z-index: 1;
    transform: rotate(2deg);
  }
`;

function SingleSlicemaster({ person }) {
  return (
    <SlicemasterStyles key={person.id}>
      <Link to={`/slicemasters/${person.slug.current}`}>
        <h2>
          <span className="mark">{person.name}</span>
        </h2>
        <Img fluid={person.image.asset.fluid} alt={person.name} />
        <p>{person.description}</p>
      </Link>
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
