/// <reference types="cypress" />

describe("Session Page", () => {
  beforeEach(() => {
    cy.visit("/conference");
    cy.get("h1").contains("View Sessions").click();
    cy.url().should("include", "/sessions");
  });

  it("should navigate to conference session page and view filter buttons", () => {
    //validate that buttons to filter by day exist.
    cy.dataCy = "AllSessions";
    cy.get("[data-cy=Wednesday]");
    cy.get("[data-cy=Thursday]");
    cy.get("[data-cy=Friday]");
  });

  it("Should filter sessions and only filter Wednesday sessions when click on Wednesday button", () => {
    cy.intercept("POST", "http://localhost:4000/graphql").as("getSessionInfo");
    cy.get("[data-cy=Wednesday]").click();
    cy.wait("@getSessionInfo");

    //Validation
    cy.get("[data-cy=day]").contains("Wednesday").should("be.visible");
    cy.get("[data-cy=day]").contains("Thursday").should("not.exist");
    cy.get("[data-cy=day]").contains("Friday").should("not.exist");
  });
});
