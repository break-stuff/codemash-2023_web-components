import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./my-switch.styles";

/**
 * Switches allow the user to toggle an option on or off.
 *
 * @tag my-switch
 *
 */
@customElement("my-switch")
export class MySwitch extends LitElement {
  static styles = styles;

  /** This is used to describe the switch */
  @property() label?: string;


  @property({ type: Boolean }) checked: boolean = false;

  render() {
    return html`
    <label id="switch-label">${this.label}</label>
      <button role="switch" class="control" aria-labelledby="switch-label" aria-checked="${this.checked}">
        <div class="track">
          <div class="switch"></div>
        </div>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-switch": MySwitch;
  }
}
