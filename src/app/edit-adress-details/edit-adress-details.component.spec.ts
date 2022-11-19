import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdressDetailsComponent } from './edit-adress-details.component';

describe('EditAdressDetailsComponent', () => {
  let component: EditAdressDetailsComponent;
  let fixture: ComponentFixture<EditAdressDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdressDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAdressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
