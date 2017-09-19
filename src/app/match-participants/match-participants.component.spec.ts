import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchParticipantsComponent } from './match-participants.component';

describe('MatchParticipantsComponent', () => {
  let component: MatchParticipantsComponent;
  let fixture: ComponentFixture<MatchParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
