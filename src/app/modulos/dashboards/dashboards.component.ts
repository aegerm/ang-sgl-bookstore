import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {

  @Input() livros: number;
  @Input() categorias: number;

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.countLivros();
    this.countCategorias();
  }

  countLivros(): void {
    this.service.countRegistroLivro().subscribe(res => {
      if (res === 0 ) {
        this.livros = 0;
      } else {
        this.livros = res;
      }
    });
  }

  countCategorias(): void {
    this.service.countRegistroCategoria().subscribe(res => {
      if (res === 0 ) {
        this.categorias = 0;
      } else {
        this.categorias = res;
      }
    });
  }
}
