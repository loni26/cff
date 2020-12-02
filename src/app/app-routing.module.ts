import { ResultTableComponent } from './core/result-table/result-table.component';
import { SearchComponent } from './core/search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: SearchComponent
  },
  {
    path: 'result', component: ResultTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
