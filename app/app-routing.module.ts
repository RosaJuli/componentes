import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ElementosComponent } from './components/elementos/elementos.component';

const routes: Routes = [
  {
    path:'',
    component : AppComponent,
    children:[
      {
        path:'',
        component: ElementosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
