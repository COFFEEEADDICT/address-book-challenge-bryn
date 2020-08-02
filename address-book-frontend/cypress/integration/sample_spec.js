// const { isTypedArray } = require("lodash");

// describe("My First Test", function () {
// 	it("does not do much", function () {
// 		expect(true).to.equal(true);
// 	});
// });

// @ts-ignore

describe("focus input", () => {
	it("focuses on input load", () => {
		cy.visit("http://localhost:3000");

		cy.focused()
			.should("have.class", "sc-AxjAm hmBuEQ UserInputField")
			.should("be.visible");
	});
	it.only("accepts input", () => {
		const typedText = "r";
		cy.visit("http://localhost:3000");

		cy.get('input[name="userSearchInput"]').type(typedText);
		// .should("have.value", typedText);
	});
});
