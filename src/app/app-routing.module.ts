import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadTesteComponent } from './componentes/upload-teste/upload-teste.component';
import { ComponenteBuscaComponent } from './componentes/componente-busca/componente-busca.component';


const routes: Routes = [
  {path: 'pokedex', component: ComponenteBuscaComponent, data: { title: 'Pokedex'}},
  {path: 'upload', component: UploadTesteComponent , data: { title: 'Upload'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
