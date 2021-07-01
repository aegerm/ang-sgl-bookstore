import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../model/livro.model';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.scss']
})
export class LivroFormComponent implements OnInit {

  livroForm: FormGroup;
  livro: Livro;
  categoriaId: string;

  constructor(private service: LivroService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.categoriaId = this.route.snapshot.paramMap.get('categoria_id');
    this.livroForm = this.fb.group({
      autor: [''],
      titulo: [''],
      texto: ['']
    });
  }

  cadastrarLivro(): void {
    this.livro = Object.assign({}, this.livro, this.livroForm.value);
    this.service.registrarLivro(this.categoriaId, this.livro).subscribe(res => {
      this.router.navigate([`categorias/${this.categoriaId}/livros`]);
    });
  }

  cancelar(): void {
    this.router.navigate([`categorias/${this.categoriaId}/livros`]);
  }
}
