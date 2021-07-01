import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/categoria.model';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.scss']
})
export class CategoriaEditComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  };

  constructor(private service: CategoriaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id');
    this.buscarCategoriaId();
  }

  atualizarCategoria(): void {
    this.service.updateCategoria(this.categoria).subscribe(res => {
      this.router.navigate(['categorias/categoria-list']);
    });
  }

  buscarCategoriaId(): void {
    this.service.findById(this.categoria.id).subscribe(res => {
      this.categoria = res;
    });
  }

  cancelar(): void {
    this.router.navigate(['categorias/categoria-list']);
  }
}
