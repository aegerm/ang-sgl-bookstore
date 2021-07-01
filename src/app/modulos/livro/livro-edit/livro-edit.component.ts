import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../model/livro.model';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-livro-edit',
  templateUrl: './livro-edit.component.html',
  styleUrls: ['./livro-edit.component.scss']
})
export class LivroEditComponent implements OnInit {

  categoriaId: string;

  livro: Livro = {
    id: '',
    autor: '',
    titulo: '',
    texto: ''
  };

  constructor(private service: LivroService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.livro.id = this.route.snapshot.paramMap.get('id');
    this.categoriaId = this.route.snapshot.paramMap.get('categoria_id');
    this.buscarLivroId();
  }

  atualizarLivro(): void {
    this.service.atualizarLivro(this.livro).subscribe(res => {
      this.router.navigate([`categorias/${this.categoriaId}/livros`]);
    });
  }

  buscarLivroId(): void {
    this.service.findById(this.livro.id).subscribe(res => {
      this.livro = res;
    });
  }
}
