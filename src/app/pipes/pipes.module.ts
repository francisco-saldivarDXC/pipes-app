import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { BasicsPageComponent } from './page/basics-page/basics-page.component';
import { NumbersPageComponent } from './page/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './page/uncommon-page/uncommon-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { CustomPageComponent } from './page/custom-page/custom-page.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipeTsPipe } from './pipes/can-fly.pipe.ts.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    CustomPageComponent,

    //Pipes
    ToggleCasePipe,
    CanFlyPipeTsPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    PrimeNGModule
  ]
})
export class PipesModule { }
