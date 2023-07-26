import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVillageComponent } from './edit-village.component';

describe('EditVillageComponent', () => {
  let component: EditVillageComponent;
  let fixture: ComponentFixture<EditVillageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditVillageComponent]
    });
    fixture = TestBed.createComponent(EditVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
