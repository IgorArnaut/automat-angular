import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaArtikalaComponent } from './tabela-artikala/tabela-artikala.component';
import { PrijavaFormaComponent } from './prijava-forma/prijava-forma.component';

const routes: Routes = [
  {
    path: 'tabela-artikala',
    component: TabelaArtikalaComponent,
  },
  {
    path: 'prijava',
    component: PrijavaFormaComponent,
  },
  { path: '**', component: TabelaArtikalaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
