import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendaPageComponent } from './fazenda-page.component';

describe('FazendaPageComponent', () => {
  let component: FazendaPageComponent;
  let fixture: ComponentFixture<FazendaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazendaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FazendaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
