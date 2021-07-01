import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from '../model/categoria.model';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

  categoriaForm: FormGroup;
  categoria: Categoria;

  constructor(private fb: FormBuilder, private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.categoriaForm = this.fb.group({
      nome: [''],
      descricao: ['']
    });
  }

  adicionarCategoria(): void {
    this.categoria = Object.assign({}, this.categoria, this.categoriaForm.value);
    this.service.registrarCategoria(this.categoria).subscribe(response => {
      this.router.navigate(['categorias/categoria-list']);
    });
  }

  cancelar(): void {
    this.router.navigate(['categorias/categoria-list']);
  }
}
