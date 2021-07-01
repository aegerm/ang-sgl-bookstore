import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../model/livro.model';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.scss']
})
export class LivroListComponent implements OnInit {

  livros: Livro[] = [];
  categoriaId: string;

  constructor(private service: LivroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoriaId = this.route.snapshot.paramMap.get('categoria_id');
    this.buscarTodosLivros();
  }

  criarNovoLivro(): void {
    this.router.navigate([`categorias/${this.categoriaId}/livros/cadastrar-livro`]);
  }

  buscarTodosLivros(): void {
    this.service.findAll(this.categoriaId).subscribe(res => {
      this.livros = res;
    });
  }
}
