import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { EmpresaComponent } from './componentes/empresa/empresa.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';

const routes: Routes = [
  {path: '', component:  HomeComponent},
  {path: 'empresa', component:  EmpresaComponent},
  {path: 'productos', component:  ProductosComponent},
  {path: 'contacto', component:  ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
