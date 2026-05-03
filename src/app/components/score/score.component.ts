import { Component, OnInit } from '@angular/core';
import { GameService, Score } from '../../services/game.service';

@Component({
  selector: 'app-score',
  template: `
    <div class="score-board">
      <span class="score-label">SCORE</span>
      <span class="score-value">{{ score.playerScore }}</span>
    </div>
  `,
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  score: Score = { playerScore: 0, computerScore: 0 };

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.score$.subscribe(score => {
      this.score = score;
    });
  }
}
