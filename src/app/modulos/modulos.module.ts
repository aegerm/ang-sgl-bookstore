import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { CategoriaService } from './categoria/services/categoria.service';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriaDeleteComponent } from './categoria/categoria-delete/categoria-delete.component';
import { CategoriaEditComponent } from './categoria/categoria-edit/categoria-edit.component';
import { LivroListComponent } from './livro/livro-list/livro-list.component';
import { LivroFormComponent } from './livro/livro-form/livro-form.component';
import { LivroEditComponent } from './livro/livro-edit/livro-edit.component';
import { LivroService } from './livro/services/livro.service';
import { DashboardService } from './dashboards/services/dashboard.service';
import { LivroDeleteComponent } from './livro/livro-delete/livro-delete.component';

@NgModule({
  declarations: [
    DashboardsComponent,
    CategoriaListComponent,
    CategoriaFormComponent,
    CategoriaDeleteComponent,
    CategoriaEditComponent,
    LivroListComponent,
    LivroFormComponent,
    LivroEditComponent,
    LivroDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    DashboardsComponent,
    CategoriaListComponent,
    CategoriaFormComponent,
    CategoriaDeleteComponent,
    CategoriaEditComponent,
    LivroListComponent,
    LivroFormComponent,
    LivroEditComponent,
    LivroDeleteComponent
  ],
  providers: [
    CategoriaService,
    LivroService,
    DashboardService
  ]
})
export class ModulosModule { }
