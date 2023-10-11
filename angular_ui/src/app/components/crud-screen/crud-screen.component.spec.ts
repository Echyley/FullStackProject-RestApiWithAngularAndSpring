import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudScreenComponent } from './crud-screen.component';

describe('CrudScreenComponent', () => {
  let component: CrudScreenComponent;
  let fixture: ComponentFixture<CrudScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudScreenComponent]
    });
    fixture = TestBed.createComponent(CrudScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
