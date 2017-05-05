# Angular 2/4 library generator (in test)

## Installation

To install this library, run:

```bash
$ npm install https://github.com/mugan86/ng-2-4-utilities.git#0.1.6 --save
```

## Content of the library (Use in new programming release - 2017/04/19)

### Pipes


#### Other Type pipes

1.- 'creditCardMask': 

 * Input all words start with capitalize letter
 
 1.1.- Use in layout: 
 ```bash
 {{'card number' | creditCardMask}} 
 {{343665987286008 | creditCardMask}} ---> '***********6008'
 ```

 1.2.- Transform inside component:
 ```typescript
 import { CreditCardMaskPipe } from 'ng-2-4-<title>';
 @Component()
 export class AppComponent()
 {
    ...
    new CreditCardMaskPipe().transform("343665987286008");
 }
 
 ```
2.- 'tempConverter': 

 * Convert temperature to select unit F->Cº or inverse
 
 2.1.- Use in layout: 
 ```bash
 {{temperature_number | tempConverter:<convert-to: C (Celsius) or F (Farenheit)}} 
 {{32 | tempConverter:'C'}} ---> 0 (Convert 32 F in Cº = 0)
 
 ```

 2.2.- Transform inside component:
 ```typescript
 import { TempConverterPipe } from 'ng-2-4-utilities';
 @Component()
 export class AppComponent()
 {
   //Convert 32 F to Celsius --> 32 --> 0ºC
    ...
    new TempConverterPipe().transform(32,"C"));
 }
 
 ```

3.- 'wikipediaMobileUrl': 

 * Convert Wikipedia normal url to mobile url
 
 Use in layout: 
 ```bash
 {{'url' | wikipediaMobileUrl}} 
 {{'https://es.wikipedia.org/wiki/Angular_(framework)' | wikipediaMobileUrl}} ---> 'https://es.m.wikipedia.org/wiki/Angular_(framework)'
 
 ```

 
## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install https://github.com/mugan86/ng-2-4-utilities.git#0.1.6 --save
```

If you want to use all PipesDirectives
and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { <title>Module } from 'ng-2-4-<title>';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    <title>Module
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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

MIT © [your name](mailto:email)


