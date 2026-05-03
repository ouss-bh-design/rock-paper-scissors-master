import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choice-button',
  template: `
    <button 
      class="choice-button" 
      [ngClass]="choice"
      (click)="onChoiceClick()"
      [disabled]="isDisabled">
      <div class="choice-icon">
        <img [src]="'/assets/images/icon-' + choice + '.svg'" [alt]="choice + ' icon'">
      </div>
      <span class="choice-name">{{ choice | titlecase }}</span>
    </button>
  `,
  styleUrls: ['./choice-button.component.scss']
})
export class ChoiceButtonComponent {
  @Input() choice: string = '';
  @Input() isDisabled: boolean = false;
  @Output() choiceSelected = new EventEmitter<string>();

  onChoiceClick(): void {
    if (!this.isDisabled) {
      this.choiceSelected.emit(this.choice);
    }
  }
}
