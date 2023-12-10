/// <reference types="cypress" />

export class HomePage {
  private locators: {
    signUpLink: string;
    loginEmailField: string;
    loginPasswordField: string;
    loginButton: string;
    loginError: string;
  };

  constructor() {
    this.locators = {
      signUpLink: '[href="/login"]',
      loginEmailField: '[data-qa="login-email"]',
      loginPasswordField: '[data-qa="login-password"]',
      loginButton: '[data-qa="login-button"]',
      loginError: '[action="/login"] p',
    };
  }

  private get signUpLink() {
    return cy.get(this.locators.signUpLink);
  }

  private get loginEmailField() {
    return cy.get(this.locators.loginEmailField);
  }

  private get loginPasswordField() {
    return cy.get(this.locators.loginPasswordField);
  }

  private get loginButton() {
    return cy.get(this.locators.loginButton);
  }

  public get loginError() {
    return cy.get(this.locators.loginError);
  }

  public clickSignUpLink() {
    this.signUpLink.click();
  }

  public fillLoginEmailField(email: string) {
    this.loginEmailField.clear();
    this.loginEmailField.type(email);
  }

  public fillLoginPasswordField(password: string) {
    this.loginPasswordField.clear().type(password);
  }

  public clickLoginButton() {
    this.loginButton.click();
  }

  public shouldHaveLoginError(error: string) {
    this.loginError.then((element: JQuery<HTMLElement>) => {
      expect(element.text()).to.equal(error);
    });
  }
}
