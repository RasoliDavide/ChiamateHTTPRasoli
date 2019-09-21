import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGETComponent } from './http-get.component';

describe('HttpGETComponent', () => {
  let component: HttpGETComponent;
  let fixture: ComponentFixture<HttpGETComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpGETComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpGETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
