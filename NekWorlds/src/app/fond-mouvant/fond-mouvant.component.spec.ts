import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondMouvantComponent } from './fond-mouvant.component';

describe('FondMouvantComponent', () => {
  let component: FondMouvantComponent;
  let fixture: ComponentFixture<FondMouvantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondMouvantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondMouvantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
