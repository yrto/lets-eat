/// <reference types="cypress" />

describe("login page tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("has login components", () => {
    cy.get("[data-testid=input-field]").should("have.length", 2);
    cy.get("[data-testid=button]").should("have.length", 1);
  });

  it("displays error e-mail message for wrong credentials", () => {
    cy.get("[data-testid=button]").click();
    cy.get("[data-testid=failed-login-message]").should(
      "have.text",
      "Wrong e-mail or password!"
    );
  });

  it("is able to login", () => {
    const email = "email@email.com";
    const password = "password";
    cy.get("[data-testid=input-field]")
      .first()
      .type(`${email}`)
      .next()
      .type(`${password}`);
    cy.get("[data-testid=button]").click();
    cy.contains("Logout");
  });

  it("is able to logout", () => {
    const email = "email@email.com";
    const password = "password";
    cy.get("[data-testid=input-field]")
      .first()
      .type(`${email}`)
      .next()
      .type(`${password}`);
    cy.get("[data-testid=button]").click();
    cy.contains("Logout").click();
    cy.contains("Login");
  });
});

describe("main page tests", () => {
  before(() => {
    const email = "email@email.com";
    const password = "password";
    cy.visit("http://localhost:3000/");
    cy.get("[data-testid=input-field]")
      .first()
      .type(`${email}`)
      .next()
      .type(`${password}`);
    cy.get("[data-testid=button]").click();
  });
  it("can add new reservation with enter", () => {
    cy.get("[data-testid=reservation-form]").within(() => {
      cy.get("[data-testid=input-field]").type("Duilio{enter}");
    });
  });
  it("can add new reservation with button", () => {
    cy.get("[data-testid=reservation-form]").within(() => {
      cy.get("[data-testid=input-field]").type("Ayrton");
      cy.contains("Add").click();
    });
  });
  it("can send reservation to orders", () => {
    cy.get("[data-testid=reservation-card]")
      .its("length")
      .then((length) => {
        for (let i = 0; i < length; i++) {
          cy.get("[data-testid=reservation-card]").first().click();
        }
      });
  });
  it("can add food to order with enter", () => {
    cy.get("[data-testid=order-card]")
      .first()
      .within(() => {
        cy.get("input").type("Amendoim{Enter}");
      });
  });
  it("can add food to order with button", () => {
    cy.get("[data-testid=order-card]")
      .first()
      .within(() => {
        cy.get("input").type("Pão");
        cy.contains("Add").click();
      });
  });
  it("can remove order", () => {
    cy.get("[data-testid=order-card]")
      .first()
      .within(() => {
        cy.get("[data-testid=remove-order-button]").click();
      });
  });
});
