import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./my-switch.styles";
import { styleMap } from 'lit/directives/style-map.js';

/**
 * Switches allow the user to toggle an option on or off.
 *
 * @tag my-switch
 *
 * @event switch-change - Emitted whenever the switch is toggled
 * 
 * @cssprop [--size=1rem] - Controls the size of the switch
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

  /** Determines the placement of the label in relation to the switch */
  @property({ attribute: 'label-position' }) labelPosition: 'top' | 'start' | 'end' | 'bottom' = 'top';

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

  private positionMapper() {
    return {
      top: 'column',
      start: 'row',
      end: 'row-reverse',
      bottom: 'column-reverse'
    }[this.labelPosition] || 'column';
  }

  render() {
    return html`
      <div class="base" style="${styleMap({
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: this.positionMapper()
      })}">
        <label id="switch-label">${this.label}</label>
        <button role="switch" class="control" @click=${this.toggle} aria-labelledby="switch-label" aria-checked="${this.checked}" ?disabled=${this.disabled}>
          <div class="track">
            <div class="switch"></div>
          </div>
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-switch": MySwitch;
  }
}
