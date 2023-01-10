import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./my-switch.styles";

/**
 * Switches allow the user to toggle an option on or off.
 *
 * @tag my-switch
 *
 * @event switch-change - Emitted whenever the switch is toggled
 */
@customElement("my-switch")
export class MySwitch extends LitElement {
  static styles = styles;

  /** This is used to describe the switch */
  @property() label?: string;

  /** Indicates if the switch is on or off */
  @property({ type: Boolean }) checked: boolean = false;

  
  /** Disables the switch */
  @property({ type: Boolean }) disabled: boolean = false;


  public toggle() {
    if(this.disabled) {
      return;
    }
    
    this.checked = !this.checked;
    this.emitChange();
  }

  private emitChange() {
    this.dispatchEvent(new CustomEvent('switch-change', {
      detail: {
        checked: this.checked
      },
      bubbles: true
    }))
  }

  render() {
    return html`
    <label id="switch-label">${this.label}</label>
      <button role="switch" class="control" @click=${this.toggle} aria-labelledby="switch-label" aria-checked="${this.checked}" ?disabled=${this.disabled}>
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
