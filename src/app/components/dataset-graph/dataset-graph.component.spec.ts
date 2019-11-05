import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetGraphComponent } from './dataset-graph.component';

describe('DatasetGraphComponent', () => {
  let component: DatasetGraphComponent;
  let fixture: ComponentFixture<DatasetGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
