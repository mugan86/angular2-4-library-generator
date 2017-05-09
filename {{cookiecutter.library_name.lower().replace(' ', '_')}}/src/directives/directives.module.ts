import { NgModule, ModuleWithProviders } from '@angular/core';

import { {{cookiecutter.library_name.capitalize().replace('-', '').replace(' ', '').replace('_', '')}}Directive } from './{{cookiecutter.library_name.lower().replace(' ', '_')}}.directive';

export const DIRECTIVES = [
  {{cookiecutter.library_name.capitalize().replace('-', '').replace(' ', '').replace('_', '')}}Directive
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class DirectivesModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DirectivesModule,
    };
  }
}