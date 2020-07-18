import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueMessagesComponent } from './queue-messages.component';

describe('QueueMessagesComponent', () => {
  let component: QueueMessagesComponent;
  let fixture: ComponentFixture<QueueMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
