/// <reference types="cypress" />


context('todolist.html TESTS', () => {

	// OPEN PAGE
	beforeEach(() => {
		cy.visit('../../todolist.html');
	});

	// Tester l’ajout de quatre todos puis la suppression de la deuxième todo au clique sur la croix associée. Enfin tester le fait qu’il ne reste plus que 3 todos.
	it('todolist full test : add 4 > delete 1 > check if 3 remaining' , () => {

		// TEST VALUES
		let arr = ["TestDataApple", "TestDataBanana", "TestDataOrange", "TestDataLemon"];
		// ADD 4
		arr.forEach((elem) => {
			cy.get('[data-cy=todoTextInput]').type(elem);
			cy.get('[data-cy=todoButtonInput]').click();
		});
		// CHECK ELEMENTS EXIST
		arr.forEach((elem) => {
			cy.get('[data-cy=todoListItem]').contains(elem).should('exist');
		});
		// CHECK LENGTH 4
		cy.get('[data-cy=todoListItem]').should('have.length', 4);
		// REMOVE 2nd ELEMENT
		cy.get('[data-cy=todoListItem]').eq(1).find('[data-cy=todoListItemRemoveButton]').click();
		// CHECK LENGTH 3
		cy.get('[data-cy=todoListItem]').should('have.length', 3)

	});

});


/*
2. Tester l’ajout de quatre todos puis la suppression de la deuxième todo au clique sur la croix
associée. Enfin tester le fait qu’il ne reste plus que 3 todos.
*/