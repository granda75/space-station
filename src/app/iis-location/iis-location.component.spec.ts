import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IisLocationComponent } from './iis-location.component';

describe('IisLocationComponent', () => {
  let component: IisLocationComponent;
  let fixture: ComponentFixture<IisLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IisLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IisLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
