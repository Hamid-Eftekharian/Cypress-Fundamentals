/// <reference types="cypress" />

describe("Submit a new sessin", () => {
  beforeEach(() => {
    cy.visit("/conference");
    cy.get("h1").contains("Sessions").click();
    cy.get("a").contains("Submit a Session").click();
  });
  it("should navigate to new sessions page", () => {
    cy.url().should("contain", "/sessions");
  });

  it("should submit a new session", () => {
    cy.contains("Title").type("New Session");
    cy.contains("Description").type("The biggest Session");
    cy.contains("Day").type("Thursday");
    cy.contains("Level").type("Advance");

    // sumbit the form
    cy.get("form").submit();

    //validation the form
    cy.contains("Session Submitted Successfully");
  });
});
