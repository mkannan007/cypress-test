import { homePage } from "../pages/base.page";

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the home page", () => {
    cy.request("GET", "/").then((response) => {
        expect(response.status).to.eq(200);
        });

    homePage.clickSignUpLink();
    homePage.fillLoginEmailField("test@test.com");
    homePage.fillLoginPasswordField("test");
    homePage.clickLoginButton();
    homePage.shouldHaveLoginError("Your email or password is incorrect!");
  });
});
