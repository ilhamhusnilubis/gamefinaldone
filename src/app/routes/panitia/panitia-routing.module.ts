import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanitiaComponent } from '../../components/panitia/panitia.component';
import { AddgameComponent } from '../../components/panitia/addgame/addgame.component';
import { AddparticipanComponent } from '../../components/panitia/addparticipan/addparticipan.component';


const routes: Routes = [
  {path:'', component:PanitiaComponent,},
  {path:'addgame', component:AddgameComponent},
  {path:'addparticipan', component:AddparticipanComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanitiaRoutingModule { }
