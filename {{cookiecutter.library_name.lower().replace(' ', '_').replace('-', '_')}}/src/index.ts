export { {{cookiecutter.library_name.capitalize().replace('-', '_').replace(' ', '_')}}Module } from "./{{cookiecutter.library_name.lower().replace(' ','_').replace('-', '_')}}.module";
export * from './directives';
export * from './pipes';