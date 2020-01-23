import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: 'cadastro/:id', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
