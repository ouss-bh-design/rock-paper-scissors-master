import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameState } from '../../services/game.service';

@Component({
  selector: 'app-result-display',
  template: `
    <div class="result-display">
      <div class="choices-comparison">
        <div class="choice-display player-choice">
          <h3>YOU PICKED</h3>
          <div class="choice-circle" [ngClass]="gameState.playerChoice">
            <div class="inner-circle">
              <img [src]="'/assets/images/icon-' + gameState.playerChoice + '.svg'" 
                   [alt]="gameState.playerChoice">
            </div>
            <div *ngIf="gameState.result === 'win'" class="winner-indicator">
              <div class="winner-ring"></div>
              <div class="winner-ring"></div>
              <div class="winner-ring"></div>
            </div>
          </div>
        </div>

        <div class="choice-display computer-choice">
          <h3>THE HOUSE PICKED</h3>
          <div class="choice-circle" [ngClass]="gameState.computerChoice">
            <div class="inner-circle">
              <img [src]="'/assets/images/icon-' + gameState.computerChoice + '.svg'" 
                   [alt]="gameState.computerChoice">
            </div>
            <div *ngIf="gameState.result === 'lose'" class="winner-indicator">
              <div class="winner-ring"></div>
              <div class="winner-ring"></div>
              <div class="winner-ring"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="result-announcement">
        <h1 class="result-text">
          {{ getResultText() }}
        </h1>
        <button class="play-again-button" (click)="playAgain.emit()">
          PLAY AGAIN
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./result-display.component.scss']
})
export class ResultDisplayComponent {
  @Input() gameState!: GameState;
  @Output() playAgain = new EventEmitter<void>();

  getResultText(): string {
    switch (this.gameState.result) {
      case 'win':
        return 'YOU WIN';
      case 'lose':
        return 'YOU LOSE';
      case 'draw':
        return 'DRAW';
      default:
        return '';
    }
  }
}
