/// <reference types="cypress" />


context('modal.html TESTS', () => {

	// OPEN PAGE
	beforeEach(() => {
		cy.visit('../../modal.html');
	});

	// Tester l’ouverture de la fênetre modale au clique sur display
	it('La fenetre modale s\'ouvre quand on clique sur \'display\'' , () => {
		cy.get('[data-cy=displayButton]').click();
		cy.get('[data-cy=modalWindow]').should('be.visible');
	});
	
	// Tester la fermeture de la fênetre modale au clique en dehors de la modale
	it('La fenetre modale se ferme quand on clique à coté' , () => {
		cy.get('[data-cy=displayButton]').click();
		cy.get('[data-cy=modalInnerWindow]').should('be.visible');
		cy.get('[data-cy=modalWindow]').click(1, 1);
		cy.get('[data-cy=modalInnerWindow]').should('not.be.visible');
	});

	// Tester que la fênetre modale contient un <h2></h2> contenant Lorem Ipsum
	it('La fenetre modale contient un <h2></h2> contenant \'Lorem Ipsum\'' , () => {
		cy.get('[data-cy=displayButton]').click();
		cy.get('[data-cy=modalInnerWindow]').should('be.visible');
		cy.get('[data-cy=modalWindow]').get('h2').contains("Lorem Ipsum");
	});

});


/*
2. Tester l’ouverture de la fênetre modale au clique sur display.
3. Tester la fermeture de la fênetre modale au clique en dehors de la modale.
4. Tester que la fênetre modale contient un <h2></h2> contenant Lorem Ipsum
*/