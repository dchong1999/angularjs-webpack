import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { View4Component } from './view4/view4.component';

const routes: Routes = [
  {path: '', redirectTo: '#!/angular', pathMatch: 'full'},
  {path: '#!/angular', component: AppComponent},
  {path: '#!/view4', component: View4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }