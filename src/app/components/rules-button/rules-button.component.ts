import { Component } from '@angular/core';

@Component({
  selector: 'app-rules-button',
  template: `
    <button class="rules-button" (click)="openRules()">
      RULES
    </button>
  `,
  styleUrls: ['./rules-button.component.scss']
})
export class RulesButtonComponent {

  openRules(): void {
    const modal = document.querySelector('.rules-modal') as HTMLElement;
    if (modal) {
      modal.style.display = 'flex';
    }
  }
}
