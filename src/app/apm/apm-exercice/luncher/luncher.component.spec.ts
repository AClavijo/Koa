import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuncherComponent } from './luncher.component';

describe('LuncherComponent', () => {
  let component: LuncherComponent;
  let fixture: ComponentFixture<LuncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
