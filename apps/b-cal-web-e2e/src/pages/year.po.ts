/**
 * Page object for the calendar Year page.
 * "Page object" is a design pattern, not a Cypress concept.
 * https://testing-angular.com/end-to-end-testing/#page-objects
 */
export class Year {
  public visit(): void {
    cy.visit('/');
  }

  // Page interaction example
  // public searchFor(term: string): void {
  //   cy.byTestId('search-term-input').first().clear().type(term);
  //   cy.byTestId('submit-search').first().click();
  // }

  // DOM query example
  // public photoItemLinks(): Cypress.Chainable<JQuery<HTMLElement>> {
  //   return cy.byTestId('photo-item-link');
  // }

  // Explicitly typing the return value may be useful sometimes
  public yearTitle = (): Cypress.Chainable<JQuery<HTMLElement>> =>
    cy.byTestId('year-span');
  public nextButton = () => cy.byTestId('next-button');
  public prevButton = () => cy.byTestId('previous-button');
  public navMenu = () => cy.byTestId('year-nav-menu');
  public navFirst = () => cy.byTestId('first');
  public navCurrent = () => cy.byTestId('current');
  public navLast = () => cy.byTestId('last');

  // Day cards acting as padding don't contain the div element
  public dayCards = () => cy.get('bc-day-card > div');

  // The first saturday of the year is guarunteed to have a day
  public firstSaturday = () =>
    cy.get(':nth-child(7) > [data-testid="card-div"]');

  public dayOrdinal = () => this.firstSaturday().byTestId('ordinal-span');

  public dayAbbr = () => this.firstSaturday().byTestId('abbr-span');

  public dayName = () => this.firstSaturday().byTestId('name-span');
}
