import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../model/livro.model';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.scss']
})
export class LivroDeleteComponent implements OnInit {

  categoriaId: string;

  livro: Livro = {
    id: '',
    autor: '',
    titulo: '',
    texto: ''
  };

  constructor(private router: Router, private service: LivroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.livro.id = this.route.snapshot.paramMap.get('id');
    this.categoriaId = this.route.snapshot.paramMap.get('categoria_id');
    this.buscarLivroId();
  }

  buscarLivroId(): void {
    this.service.findById(this.livro.id).subscribe(res => {
      this.livro = res;
    });
  }

  deletarLivro(): void {
    this.service.deleteLivro(this.livro.id).subscribe(res => {
      this.router.navigate([`categorias/${this.categoriaId}/livros`]);
    });
  }

  cancelar(): void {
    this.router.navigate([`categorias/${this.categoriaId}/livros`]);
  }
}
