import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGetPostComponent } from './http-get-post.component';

describe('HttpGetPostComponent', () => {
  let component: HttpGetPostComponent;
  let fixture: ComponentFixture<HttpGetPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpGetPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpGetPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
