export { {{cookiecutter.library_name.capitalize().replace('-', '_').replace(' ', '')}}Module } from "./{{cookiecutter.library_name.lower().replace(' ','_')}}.module";
export * from './directives';
export * from './pipes';