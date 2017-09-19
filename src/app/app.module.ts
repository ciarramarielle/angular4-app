import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ClarityModule } from "clarity-angular";

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { ChampionComponent } from './champion/champion.component';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { CurrentMatchComponent } from './current-match/current-match.component';
import { MatchParticipantsComponent } from './match-participants/match-participants.component';
import { ParticipantComponent } from './participant/participant.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionComponent,
    ChampionListComponent,
    CurrentMatchComponent,
    MatchParticipantsComponent,
    ParticipantComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),    
    HttpModule              // <-Add HttpModule
  ],
  providers: [DataService], // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule { }