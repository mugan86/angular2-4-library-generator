import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[{{cookiecutter.library_name.lower().replace(' ', '_').replace('-', '_')}}Directive]'
})
export class {{cookiecutter.library_name.capitalize().replace('-', '').replace(' ', '')}}Directive {

  constructor(private el: ElementRef) {
  }

}
