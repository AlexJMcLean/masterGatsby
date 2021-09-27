import { graphql } from 'gatsby';
import React from 'react';
import Nav from '../components/Nav';
import PizzaList from '../components/PizzaList';

export default function PizzasPage({ data }) {
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <PizzaList pizzas={pizzas}/>
    </>
  );
}

export const query = graphql`
  query{
    pizzas: allSanityPizza {
      nodes {
        name
        price
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth:400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
