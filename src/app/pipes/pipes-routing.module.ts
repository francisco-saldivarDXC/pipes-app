import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './page/basics-page/basics-page.component';
import { NumbersPageComponent } from './page/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './page/uncommon-page/uncommon-page.component';
import { CustomPageComponent } from './page/custom-page/custom-page.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsPageComponent,
  },
  {
    path: 'numbers',
    component: NumbersPageComponent,
  },
  {
    path: 'uncommon',
    component: UncommonPageComponent,
  },
  {
    path: 'custom',
    component: CustomPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipesRoutingModule {}
