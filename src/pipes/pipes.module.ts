import { NgModule } from '@angular/core';

import { PipesStringModule } from './str';
import { PipesOtherModule } from './other';

export const PIPES = [
    PipesStringModule,
    PipesOtherModule
    //Add your pipe modules!!
];

@NgModule({
  imports: [ PIPES ],
  exports: [ PIPES ]
})
export class PipesModule { }