export class Modal {
  buttons = [];

  constructor({title, buttonId, formId, contentView}) {
    this.title = title;
    this.triggerButtonId = buttonId;
    this.formId = formId;
    this.contentView = contentView;
  }

  setTitle(title) {
    this.title = title;
    return this;
  }

  setContentView(contentView) {
    this.contentView = contentView;
    return this;
  }

  setTriggerButtonId(buttonId) {
    this.triggerButtonId = buttonId;
    return this;
  }

  setFormId(formId) {
    this.formId = formId;
    return this;
  }

  addButton(text, id, classes, role = '') {
    this.buttons.push({ text, id, classes, role });
    return this;
  }
}
