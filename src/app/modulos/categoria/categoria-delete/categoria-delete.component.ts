import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/categoria.model';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.scss']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  };

  constructor(private service: CategoriaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id');
    this.buscarCategoriaId();
  }

  buscarCategoriaId(): void {
    this.service.findById(this.categoria.id).subscribe(response => {
      this.categoria = response;
    });
  }

  deletarCategoria(): void {
    this.service.deleteCategoria(this.categoria.id).subscribe(() => {
      this.router.navigate(['categorias/categoria-list']);
    });
  }

  cancelar(): void {
    this.router.navigate(['categorias/categoria-list']);
  }
}
