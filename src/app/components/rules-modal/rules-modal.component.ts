import { Component } from '@angular/core';

@Component({
  selector: 'app-rules-modal',
  template: `
    <div class="rules-modal" (click)="onOverlayClick($event)">
      <div class="modal-content">
        <div class="modal-header">
          <h2>RULES</h2>
          <button class="close-button" (click)="closeRules()">
            <img src="/assets/images/icon-close.svg" alt="Close">
          </button>
        </div>
        <div class="modal-body">
          <img src="/assets/images/image-rules.svg" alt="Game Rules" class="rules-image">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./rules-modal.component.scss']
})
export class RulesModalComponent {

  closeRules(): void {
    const modal = document.querySelector('.rules-modal') as HTMLElement;
    if (modal) {
      modal.style.display = 'none';
    }
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeRules();
    }
  }
}
