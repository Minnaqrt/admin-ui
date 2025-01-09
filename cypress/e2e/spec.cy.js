describe("User login and dashboard overview", () => {
  it("should allow user to log in and access dashboard overview with valid credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.url().should("include", "/");

    cy.get("header").should("be.visible");
    cy.get("nav").should("be.visible");

    cy.get("nav").contains("Overview").should("be.visible");

    cy.get(".card").contains("Total Balance").should("be.visible");
    cy.get(".card").contains("Goals").should("be.visible");
    cy.get(".card").contains("Upcoming Bill").should("be.visible");
    cy.get(".card").contains("Recent Transaction").should("be.visible");
    cy.get(".card").contains("Statistics").should("be.visible");

    cy.get("nav").contains("Balances").should("be.visible");
    cy.get("nav").contains("Transaction").should("be.visible");
    cy.get("nav").contains("Bills").should("be.visible");
    cy.get("nav").contains("Expenses").should("be.visible");
    cy.get("nav").contains("Goals").should("be.visible");
    cy.get("nav").contains("Settings").should("be.visible");
    cy.get("nav").contains("Themes").should("be.visible");
    cy.get("nav").contains("Logout").should("be.visible");
  });
});
  it("should not allow user to log in with invalid credentials (wrong password)", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123")
      .should("have.value", "123");

    cy.get("button").contains("Login").click();

    cy.get("div").contains("Wrong Password");
  });

  it("should not allow user to log in with invalid credentials (wrong email)", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("wrong@example.com")
      .should("have.value", "wrong@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("div").contains("Email tidak ditemukan");
  });

it("should not allow user to log in with invalid credentials (invalid email format)", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("helloexamplecom")
      .should("have.value", "helloexamplecom");

    cy.get("div").contains("Invalid email address format").should("be.visible");
  });
