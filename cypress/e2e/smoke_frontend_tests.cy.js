describe("Navigator App Loads", () => {
  it("should open the homepage", () => {
    cy.visit("https://www.navigator.ba");
    cy.url().should("include", "navigator.ba");
    cy.get("body").should("be.visible");
  });

  it('map should be loaded', () => {
    cy.visit('https://www.navigator.ba/')

    cy.get('.ember-view.navigator-map.leaflet-container')
      .should('exist')
      .and('be.visible')
  })

  // cypress couldn't have location
  // it('location should be loaded', () => {
  //   cy.visit('https://www.navigator.ba/')

  //   cy.get('.user-location-marker')
  //     .should('exist')
  //     .and('be.visible')
  // })
});

describe("Header Bar Visibility Test", () => {
  it("should display all header elements correctly", () => {
    cy.visit("https://www.navigator.ba");
    cy.get("#header_container").should("be.visible");

    cy.get("#header_search").within(() => {
      cy.get(".iconav-search").should("be.visible");
    });

    cy.get(".navigation.left")
      .should("be.visible")
      .within(() => {
        cy.get("li").each(($li) => {
          cy.wrap($li).should("be.visible");
        });
      });

    cy.get(".languages")
      .should("be.visible")
      .within(() => {
        cy.get("li").each(($li) => {
          cy.wrap($li).should("be.visible");
        });
      });

    cy.get(".social")
      .should("be.visible")
      .within(() => {
        cy.get("li").each(($li) => {
          cy.wrap($li).should("be.visible");
        });
      });
  });
});

describe("Sidebar Menu", () => {
  it("should be visible on page load", () => {
    cy.visit("https://www.navigator.ba");
    cy.get("ul.menu_content_list.categories").should("be.visible");
  });
});


