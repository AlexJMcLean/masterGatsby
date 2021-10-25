import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/SEO";

const PersonStyles = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .gatsby-image-wrapper {
    width: 100%;
  }
  h1 {
    margin-top: 1rem;
  }
`;

export default function singleSlicemasterPage({ data }) {
  const { person } = data;
  return (
    <>
      <SEO title={person.name} image={person.image?.asset?.src} />
      <PersonStyles>
        <Img fluid={person.image.asset.fluid} alt={person.name} />
        <h1 className="mark">{person.name}</h1>
        <p>{person.description}</p>
      </PersonStyles>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      id
      name
      description
      image {
        asset {
          fluid(maxWidth: 800, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
