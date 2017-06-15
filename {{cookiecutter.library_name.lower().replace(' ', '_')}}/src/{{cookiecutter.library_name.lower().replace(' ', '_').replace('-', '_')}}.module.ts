import { NgModule, ModuleWithProviders  } from '@angular/core';

import { PipesModule } from './pipes';
import { DirectivesModule } from './directives';
import { {{cookiecutter.library_name.capitalize().replace('-', '').replace(' ', '').replace('_', '')}}Service } from './services/{{cookiecutter.library_name.lower().replace(' ', '_').replace('-', '_')}}.service';


export const MODULES = [
    PipesModule,
    DirectivesModule
];

@NgModule({
  imports: [ MODULES ],
  exports: [ MODULES ]
})
export class {{cookiecutter.library_name.capitalize().replace('-', '').replace(' ', '').replace('_', '')}}Module { 
    static forRoot(): ModuleWithProviders {
        return {
                    ngModule: {{cookiecutter.library_name.capitalize().replace('-', '').replace(' ', '').replace('_', '')}}Module, 
                    providers: [{{cookiecutter.library_name.capitalize().replace('-', '').replace(' ', '').replace('_', '')}}Service]
                };
    }
}