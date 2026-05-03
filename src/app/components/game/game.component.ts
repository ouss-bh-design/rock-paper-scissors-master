import { Component, OnInit } from '@angular/core';
import { GameService, GameState } from '../../services/game.service';

@Component({
  selector: 'app-game',
  template: `
    <div class="game-container">
      <app-header></app-header>

      <main class="game-main">
        <div *ngIf="!gameState.showResult" class="choices-section">
          <div class="choices-container">
            <img src="/assets/images/bg-triangle.svg" alt="Triangle Background" class="triangle-bg">
            <div class="choices-triangle">
              <app-choice-button 
                class="choice-left-top"
                choice="paper"
                (choiceSelected)="onChoiceSelected($event)">
              </app-choice-button>
              <app-choice-button 
                class="choice-right-top"
                choice="scissors"
                (choiceSelected)="onChoiceSelected($event)">
              </app-choice-button>
              <app-choice-button 
                class="choice-bottom"
                choice="rock"
                (choiceSelected)="onChoiceSelected($event)">
              </app-choice-button>
            </div>
          </div>
        </div>

        <div *ngIf="gameState.showResult" class="result-section">
          <app-result-display 
            [gameState]="gameState"
            (playAgain)="onPlayAgain()">
          </app-result-display>
        </div>
      </main>

      <div class="rules-button-container">
        <app-rules-button></app-rules-button>
      </div>

      <app-rules-modal></app-rules-modal>
    </div>
  `,
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  gameState: GameState;

  constructor(private gameService: GameService) {
    this.gameState = {
      playerChoice: null,
      computerChoice: null,
      result: null,
      isPlaying: false,
      showResult: false
    };
  }

  ngOnInit(): void {
    this.gameService.gameState$.subscribe(state => {
      this.gameState = state;
    });
  }

  onChoiceSelected(choice: string): void {
    this.gameService.playGame(choice as any);
  }

  onPlayAgain(): void {
    this.gameService.resetGame();
  }
}
