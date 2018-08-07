import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterItemComponent } from './enter-item.component';

describe('EnterItemComponent', () => {
  let component: EnterItemComponent;
  let fixture: ComponentFixture<EnterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
