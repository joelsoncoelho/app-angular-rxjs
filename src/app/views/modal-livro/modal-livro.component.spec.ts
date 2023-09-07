import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLivroComponent } from './modal-livro.component';

describe('ModalLivroComponent', () => {
  let component: ModalLivroComponent;
  let fixture: ComponentFixture<ModalLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLivroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
