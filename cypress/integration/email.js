/// <reference types="cypress" />

describe("Email client", () => {
  // beforeEach(() => {});
  it("Signup Page", () => {
    cy.visit("signup");
    cy.get('[data-cy="signup-component"]').should("be.visible");
  });
  it("Signin Page", () => {
    cy.visit("");
    cy.get('[data-cy="signin-component"]').should("be.visible");
  });
});
