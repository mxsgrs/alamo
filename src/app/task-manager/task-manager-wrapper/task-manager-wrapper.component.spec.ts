import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerWrapperComponent } from './task-manager-wrapper.component';

describe('TaskManagerWrapperComponent', () => {
  let component: TaskManagerWrapperComponent;
  let fixture: ComponentFixture<TaskManagerWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManagerWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskManagerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
