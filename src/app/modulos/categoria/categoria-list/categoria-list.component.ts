import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/categoria.model';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias(): void {
    this.service.findAll().subscribe(response => {
      this.categorias = response;
    });
  }

  gotToCadastrarCategoria(): void {
    this.router.navigate(['categorias/cadastrar-categoria']);
  }
}
