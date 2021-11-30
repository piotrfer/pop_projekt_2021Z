import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForestryWindowComponent } from './windows/forestry-window/forestry-window.component';
import { SensorWindowComponent } from './windows/sensor-window/sensor-window.component';

const routes: Routes = [
  { path: '', component: ForestryWindowComponent },
  { path: 'sensor', component: SensorWindowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
