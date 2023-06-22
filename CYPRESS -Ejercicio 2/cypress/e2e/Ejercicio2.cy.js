/// <reference types="cypress" />

describe("Ejercicio2  - Primer proceso de prueba WIKIPEDIA", () => {
  it("crear factura", () => {
    const busquedaQA='primer proceso'
        
    cy.visit("https://www.google.com.pe/");
    cy.viewport(1366, 768)
    cy.get("#APjFqb").click({force: true}).type('automatización{enter}',{force: true});
    cy.wait(5000);
    cy.get('span>a').contains("Wikipedia").click();
    
    cy.origin('https://es.wikipedia.org/wiki/Automatizaci%C3%B3n', () => {
      cy.get('p').should('contain', 'primer proceso');
      cy.screenshot("Ejercicio2"); 
    })
    
  });
});
