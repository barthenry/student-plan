export class Modal {
  $triggerButton = null;
  showing = null;
  error = null;

  attachToButton(triggerButtonId) {
    this.$triggerButton = $(`#${triggerButtonId}`);
    this.$triggerButton.click(() => this.showModal());
  }

  closeModal() {
    this.reset();
    this.showing = false;
  }

  reset() {}

  showModal() {
    this.showing = true;
  }

  onKeydown(event) {
    if (event.which === 13) {
      this.submit();
    }
  }
}
