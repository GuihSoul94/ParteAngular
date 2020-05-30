import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTesteComponent } from './upload-teste.component';

describe('UploadTesteComponent', () => {
  let component: UploadTesteComponent;
  let fixture: ComponentFixture<UploadTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
