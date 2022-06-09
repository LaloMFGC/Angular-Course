import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { BusquedaComponent } from './Components/busqueda/busqueda.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ResultadosComponent } from './Components/resultados/resultados.component';

const routes: Routes = [

  { path: '', 
    component: HomeComponent
  },
  { path: 'busqueda',
    component: BusquedaComponent
  },
  { path: 'sidebar', 
    component: SidebarComponent
  },
  { path: 'resultados', 
    component: ResultadosComponent
  },
  { path: '**', 
    pathMatch: 'full', 
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
