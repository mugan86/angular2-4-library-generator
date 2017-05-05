import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[{{cookiecutter.library_name.lower().replace(' ', '_')}}Directive]'
})
export class {{cookiecutter.library_name.capitalize()}}Directive {

  constructor(private el: ElementRef) {
  }

}
