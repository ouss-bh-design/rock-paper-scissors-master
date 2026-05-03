import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { ScoreComponent } from './components/score/score.component';
import { RulesButtonComponent } from './components/rules-button/rules-button.component';
import { RulesModalComponent } from './components/rules-modal/rules-modal.component';
import { ChoiceButtonComponent } from './components/choice-button/choice-button.component';
import { ResultDisplayComponent } from './components/result-display/result-display.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent,
    ScoreComponent,
    RulesButtonComponent,
    RulesModalComponent,
    ChoiceButtonComponent,
    ResultDisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: GameComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
