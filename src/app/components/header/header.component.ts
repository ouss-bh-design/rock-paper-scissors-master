import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="game-header">
      <div class="header-content">
        <div class="header-rectangle">
          <div class="logo">
            <img src="/assets/images/logo.svg" alt="Rock Paper Scissors Logo" class="logo-image">
          </div>
          <div class="header-actions">
            <app-score></app-score>
          </div>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
