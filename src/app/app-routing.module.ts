import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaDeleteComponent } from './modulos/categoria/categoria-delete/categoria-delete.component';
import { CategoriaEditComponent } from './modulos/categoria/categoria-edit/categoria-edit.component';
import { CategoriaFormComponent } from './modulos/categoria/categoria-form/categoria-form.component';
import { CategoriaListComponent } from './modulos/categoria/categoria-list/categoria-list.component';
import { DashboardsComponent } from './modulos/dashboards/dashboards.component';
import { LivroDeleteComponent } from './modulos/livro/livro-delete/livro-delete.component';
import { LivroEditComponent } from './modulos/livro/livro-edit/livro-edit.component';
import { LivroFormComponent } from './modulos/livro/livro-form/livro-form.component';
import { LivroListComponent } from './modulos/livro/livro-list/livro-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboards', pathMatch: 'full' },
  { path: 'dashboards', component: DashboardsComponent },
  { path: 'categorias/categoria-list', component: CategoriaListComponent },
  { path: 'categorias/cadastrar-categoria', component: CategoriaFormComponent },
  { path: 'categorias/:id/deletar', component: CategoriaDeleteComponent },
  { path: 'categorias/:id/editar', component: CategoriaEditComponent },
  { path: 'categorias/:categoria_id/livros', component: LivroListComponent },
  { path: 'categorias/:categoria_id/livros/cadastrar-livro', component: LivroFormComponent },
  { path: 'categorias/:categoria_id/livros/:id/editar', component: LivroEditComponent },
  { path: 'categorias/:categoria_id/livros/:id/deletar', component: LivroDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
