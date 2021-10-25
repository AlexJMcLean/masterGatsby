import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/SEO";

const SinglePizza = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
`;

export default function singlePizzaPage({ data }) {
  const { pizza } = data;
  return (
    <>
      <SEO title={pizza.name} image={pizza.image?.asset?.fluid?.src} />
      <SinglePizza>
        <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
        <div>
          <h1 className="mark">{pizza.name}</h1>
          <ul>
            {pizza.toppings.map((topping) => (
              <li key={topping.id}>{topping.name}</li>
            ))}
          </ul>
        </div>
      </SinglePizza>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
