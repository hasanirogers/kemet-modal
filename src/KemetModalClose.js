import { html, LitElement } from 'lit-element';

export class KemetModalClose extends LitElement {
  render() {
    return html`
      <slot @click=${this.close}></slot>
    `;
  }

  close() {
    this.dispatchEvent(new CustomEvent('kemet-modal-close-btn', {
      bubbles: true,
      composed: true,
      detail: this,
    }));
  }
}
