// const { isTypedArray } = require("lodash");

// describe("My First Test", function () {
// 	it("does not do much", function () {
// 		expect(true).to.equal(true);
// 	});
// });

// @ts-ignore

describe("normal run through test", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	// standard e2e -- input search and 5 results come up
	it("accepts input", () => {
		const typedText = "r";
		cy.get('input[name="userSearchInput"]')
			.should("have.class", "sc-AxjAm hmBuEQ UserInputField")
			.should("be.visible")
			.type(typedText)
			.should("have.value", typedText);

		cy.get(".sc-AxhCb")
			.should("have.length", 5)
			.contains("r", { matchCase: false });
	});

	// test for failing search -- when search fails due to name / contact not existing in db
	it("fails on incorrect name", () => {
		const typedText = "zzz";
		cy.get('input[name="userSearchInput"]')
			.should("have.class", "sc-AxjAm hmBuEQ UserInputField")
			.should("be.visible")
			.type(typedText)
			.should("have.value", typedText);

		cy.get(".sc-AxhUy")
			.should("have.length", 1)
			.should("contain", "no contacts found");
	});
});
