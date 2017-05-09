import { Component } from '@angular/core';

@Component({
  selector: '{{cookiecutter.library_name.lower().replace(' ', '_')}}-component',
  template: `<h1>{{cookiecutter.library_name}} component</h1>`
})
export class {{cookiecutter.library_name.capitalize().replace(' ', '').replace('-', '').replace('_', '')}}Component {

  constructor() {
  }

}
