import { NgModule, ModuleWithProviders  } from '@angular/core';

import { PipesModule } from './pipes';
import { DirectivesModule } from './directives';

export const MODULES = [
    PipesModule,
    DirectivesModule
];

@NgModule({
  imports: [ MODULES ],
  exports: [ MODULES ]
})
export class {{cookiecutter.library_name.capitalize()}}Module { 
  static forRoot(): ModuleWithProviders {
        return {ngModule: {{cookiecutter.library_name.capitalize()}}Module, providers: []};
    }
}