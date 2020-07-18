import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueMessageAddComponent } from './queue-message-add.component';

describe('QueueMessageAddComponent', () => {
  let component: QueueMessageAddComponent;
  let fixture: ComponentFixture<QueueMessageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueMessageAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueMessageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
