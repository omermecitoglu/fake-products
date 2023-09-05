import React from "react";
import RatingStars from ".";

describe("RatingStars component", () => {
  it("renders correctly", () => {
    cy.mount(<RatingStars rate={0} count={0} />);
    cy.get("li").should("have.length", 5);
    cy.get("span").should("contains.text", "0 reviews");
  });
  it("should display the correct number of filled stars based on rate prop", () => {
    cy.mount(<RatingStars rate={3.5} count={0} />);

    cy.get(".text-primary").should("have.length", 4);
    cy.get(".text-secondary").should("have.length", 1);
  });
});
