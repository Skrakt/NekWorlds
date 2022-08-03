import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesFinderComponent } from './games-finder.component';

describe('GamesFinderComponent', () => {
  let component: GamesFinderComponent;
  let fixture: ComponentFixture<GamesFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
