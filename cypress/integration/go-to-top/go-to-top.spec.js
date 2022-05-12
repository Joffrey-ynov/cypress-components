/// <reference types="cypress" />


context('go-to-top.html TESTS', () => {

	// OPEN PAGE
	beforeEach(() => {
		cy.visit('../../go-to-top.html');
	});

	// Tester l’apparition du bouton "scroll-to-top" en bas à droite lorsqu’on scroll vers le bas.
	it('Un bouton "scroll-to-top" apparait en bas à droite lorsqu’on scroll vers le bas' , () => {
		cy.get('[data-cy=scrollToTopButton]').should('not.be.visible');
		cy.scrollTo(0, 1080);
		cy.get('[data-cy=scrollToTopButton]').should('be.visible');
	});

	// Tester le retour en haut de la page et la disparition du bouton "scroll-to-top" lors du clique sur celui-ci.
	it('On retourne en haut de la page et le bouton "scroll-to-top" disparait lorsque l\'on clique sur celui-ci' , () => {
		cy.scrollTo(0, 1080);
		cy.get('[data-cy=scrollToTopButton]').click();
		cy.window().its('scrollY').should('equal', 0);
		cy.get('[data-cy=scrollToTopButton]').should('not.be.visible');
	});

});


/*
2. Tester l’apparition du bouton "scroll-to-top" en bas à droite lorsqu’on scroll vers le bas.
3. Tester le retour en haut de la page et la disparition du bouton "scroll-to-top" lors du clique sur celui-ci.
*/