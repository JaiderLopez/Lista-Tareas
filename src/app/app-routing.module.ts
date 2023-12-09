import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Componets/listar/listar.component';
import { AddComponent } from './Componets/add/add.component';
import { VerTareaComponent } from './Componets/ver-tarea/ver-tarea.component';
import { AddTareaComponent } from './Componets/add-tarea/add-tarea.component';

const routes: Routes = [
  {path: '', component: ListarComponent},
  {path: 'home', component: ListarComponent},
  {path: 'addA', component: AddComponent},
  {path: 'home/ver-tarea/:title', component: VerTareaComponent},
  {path: 'home/add-tarea/:title', component: AddTareaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
