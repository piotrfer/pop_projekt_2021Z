import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForestryWindowComponent } from './windows/forestry-window/forestry-window.component';
import { SensorWindowComponent } from './windows/sensor-window/sensor-window.component';
import { TokenWindowComponent } from './windows/token-window/token-window.component';

const routes: Routes = [
  { path: '', component: ForestryWindowComponent },
  { path: '_sensor', component: TokenWindowComponent, outlet: 'second' },
  { path: '_sensor', component: SensorWindowComponent },
  { path: 'sensor', redirectTo: '/_sensor(second:_sensor)' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
