# Angular 2/4 Library Generator in one minute.

Angular 2/4 Library Generator with pipes, directives, services (with examples)

CookieCutter Template for create Angular 2/4 library structure
----------

Cookiecutter_ template for a new Angular 2/4 library estructure. 

.. _Cookiecutter: https://github.com/audreyr/cookiecutter

Quickstart
----------

Install the latest cookiecutter:: 

     pip install --user cookiecutter

Generate a new angular 2/4 library structure (with pipes examples, directives, services and components):

     cookiecutter https://github.com/mugan86/angular2-4-library-generator.git

You've cloned <our-directory> before.
 Is it okay to delete and re-clone it? [yes]:
 
     Input "yes" or press intro without input nothing. This command should create a angular 2/4 library structure in inside new library dir.

## Library data:

* Library name (Not start with numbers and not use more than two words and word limit is 10 characters. Required min 5 characters). For example: "angular2 library"
* Author user name. For example: Anartz
* Author last name. For example: Mugika
* Author email. For example: mugan86@gmail.com
* Github user. For example: mugan86

# Instructions after create library with first explain

## Installation

To install this library, run:

```bash
$ npm install <create-library-name> (angular2librarytest in this case) --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular2librarytest
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { Angular2librarytest } from 'angular2librarytest';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    Angular2librarytest
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<sampleComponent></sampleComponent>
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Anartz Mugika](mailto:mugan86@gmail.com)
