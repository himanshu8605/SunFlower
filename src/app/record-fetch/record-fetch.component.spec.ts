import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordFetchComponent } from './record-fetch.component';

describe('RecordFetchComponent', () => {
  let component: RecordFetchComponent;
  let fixture: ComponentFixture<RecordFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
