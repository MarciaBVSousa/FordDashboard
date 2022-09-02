import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVeiculoDataComponent } from './cadastro-veiculo-data.component';

describe('CadastroVeiculoDataComponent', () => {
  let component: CadastroVeiculoDataComponent;
  let fixture: ComponentFixture<CadastroVeiculoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroVeiculoDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroVeiculoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
