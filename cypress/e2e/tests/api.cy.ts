describe("API Test", () => {
  it.only("Validate the header", () => {
    cy.request("https://automationexercise.com/api/productsList").then(
      (response) => {
        expect(response.status).to.eq(200);

        const apiResponse: any = JSON.parse(response.body);

        // cy.task("API Response", apiResponse);
        // cy.task("log", JSON.stringify(apiResponse, null, 2));

        cy.task("log", apiResponse.products.length);

        expect(apiResponse.responseCode).to.eq(200);
      }
    );
  });
});
