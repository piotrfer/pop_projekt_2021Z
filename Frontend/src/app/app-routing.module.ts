import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForestryViewComponent } from './views/forestry-view/forestry-view.component';

const routes: Routes = [
  { path: '', component: ForestryViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
