import { LitElement } from "lit";
/**
 * Switches allow the user to toggle an option on or off.
 *
 * @tag my-switch
 *
 */
export declare class MySwitch extends LitElement {
    static styles: import("lit").CSSResult;
    /** This is used to describe the switch */
    label?: string;
    checked: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-switch": MySwitch;
    }
}
