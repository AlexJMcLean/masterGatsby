import { graphql } from "gatsby";
import React from "react";
import Nav from "../components/Nav";
import PizzaList from "../components/PizzaList";
import SEO from "../components/SEO";
import ToppingsFilter from "../components/ToppingsFilter";

export default function PizzasPage({ data, pageContext }) {
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <SEO
        title={
          pageContext.toppping
            ? `Pizzas with ${pageContext.topping}`
            : "All Pizzas"
        }
      />
      <ToppingsFilter activeTopping={pageContext.topping} />
      <PizzaList pizzas={pizzas} />
    </>
  );
}

export const query = graphql`
  query PizzaQuery($toppingRegex: String) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { name: { regex: $toppingRegex } } } }
    ) {
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
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
