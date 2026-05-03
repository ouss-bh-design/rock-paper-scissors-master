import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Choice = 'rock' | 'paper' | 'scissors';
export type Result = 'win' | 'lose' | 'draw';

export interface GameState {
  playerChoice: Choice | null;
  computerChoice: Choice | null;
  result: Result | null;
  isPlaying: boolean;
  showResult: boolean;
}

export interface Score {
  playerScore: number;
  computerScore: number;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private choices: Choice[] = ['rock', 'paper', 'scissors'];
  
  private gameStateSubject = new BehaviorSubject<GameState>({
    playerChoice: null,
    computerChoice: null,
    result: null,
    isPlaying: false,
    showResult: false
  });

  private scoreSubject = new BehaviorSubject<Score>({
    playerScore: 0,
    computerScore: 0
  });

  gameState$ = this.gameStateSubject.asObservable();
  score$ = this.scoreSubject.asObservable();

  constructor() {
    this.loadScoreFromStorage();
  }

  playGame(playerChoice: Choice): void {
    const computerChoice = this.getRandomChoice();
    const result = this.determineWinner(playerChoice, computerChoice);
    
    this.updateGameState({
      playerChoice,
      computerChoice,
      result,
      isPlaying: true,
      showResult: true
    });

    this.updateScore(result);
  }

  resetGame(): void {
    this.gameStateSubject.next({
      playerChoice: null,
      computerChoice: null,
      result: null,
      isPlaying: false,
      showResult: false
    });
  }

  private getRandomChoice(): Choice {
    return this.choices[Math.floor(Math.random() * this.choices.length)];
  }

  private determineWinner(playerChoice: Choice, computerChoice: Choice): Result {
    if (playerChoice === computerChoice) return 'draw';
    
    const winConditions: { [key in Choice]: Choice } = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };

    return winConditions[playerChoice] === computerChoice ? 'win' : 'lose';
  }

  private updateGameState(state: Partial<GameState>): void {
    const currentState = this.gameStateSubject.value;
    this.gameStateSubject.next({ ...currentState, ...state });
  }

  private updateScore(result: Result): void {
    const currentScore = this.scoreSubject.value;
    let newScore = { ...currentScore };

    if (result === 'win') {
      newScore.playerScore++;
    } else if (result === 'lose') {
      newScore.computerScore++;
    }

    this.scoreSubject.next(newScore);
    this.saveScoreToStorage(newScore);
  }

  private saveScoreToStorage(score: Score): void {
    localStorage.setItem('rps-score', JSON.stringify(score));
  }

  private loadScoreFromStorage(): void {
    const savedScore = localStorage.getItem('rps-score');
    if (savedScore) {
      try {
        const score = JSON.parse(savedScore);
        this.scoreSubject.next(score);
      } catch (e) {
        console.error('Failed to load score from storage:', e);
      }
    }
  }
}
