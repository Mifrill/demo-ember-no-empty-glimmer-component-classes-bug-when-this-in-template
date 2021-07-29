import Component from '@glimmer/component';

// Do not create empty backing classes for Glimmer components  ember/no-empty-glimmer-component-classes
export default class Checkbox extends Component {}

// When file removed: Uncaught Error: Assertion Failed: Cannot call get with 'isChecked' on an undefined object.
