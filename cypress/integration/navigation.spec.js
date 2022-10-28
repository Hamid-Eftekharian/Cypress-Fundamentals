/// <reference types="cypress" />

describe("Navigation", () => {
  it("should navigate to conference sessions page", () => {
    cy.visit("http://localhost:1337/conference");
    cy.get("h1").contains("Sessions").click();

    cy.url().should("contain", "/sessions");
  });
});
