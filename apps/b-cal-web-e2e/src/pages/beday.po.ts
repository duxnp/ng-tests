import { App } from './app.po';

export class Beday extends App {
  public visit(): void {
    cy.visit('/2022/3');
  }

  public audio = (): Cypress.Chainable<JQuery<HTMLAudioElement>> =>
    cy.get('audio[controls]');
}
