/// <reference types="cypress" />


context('smart-tag.html TESTS', () => {

	// OPEN PAGE
	beforeEach(() => {
		cy.visit('../../smart-tag.html');
	});

	// Tester l’apparition du tag au survol du bouton "See more".
	it('Le tag apparait lorsqu\'on survole le bouton \'See more\'' , () => {
		cy.get('[data-cy=smartTag]').should('not.be.visible');
		cy.get('[data-cy=mouseHoverDiv]').trigger('mouseover');
		cy.get('[data-cy=smartTag]').should('be.visible');
	});

	// Tester la disparition du tag à la sortie du survol du bouton "See more".
	it('Le tag disparait à la sortie du survol du bouton \'See more\'' , () => {
		cy.get('[data-cy=mouseHoverDiv]').trigger('mouseover');
		cy.get('[data-cy=smartTag]').should('be.visible');
		cy.get("body").click(0, 0);
		// cy.get('[data-cy=mouseHoverDiv]').trigger('mouseout');
		// cy.get('[data-cy=mouseHoverDiv]').trigger('mouseleave');
		// cy.get('[data-cy=mouseHoverDiv]').trigger('mouseaway');
		cy.get('[data-cy=smartTag]').should('not.be.visible');
	});

});


/*
2. Tester l’apparition du tag au survol du bouton "See more".
3. Tester la disparition du tag à la sortie du survol du bouton "See more".
*/