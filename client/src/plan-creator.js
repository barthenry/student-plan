import { bindable } from 'aurelia-framework';
import { Container, inject } from 'aurelia-dependency-injection';

@inject(Container)
export class PlanCreator {
  constructor(container) {
    this.courses = container.parent.viewModel.state.courses;
  }
}
