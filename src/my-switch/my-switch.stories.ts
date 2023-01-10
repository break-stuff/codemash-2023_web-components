import { html } from "lit";
import "./index";

export default {
  title: "Components/Switch",
  component: "my-switch",
  argTypes: {
    label: {
      control: { type: "text" },
    },
    "--size": {
      control: { type: "text" },
    },
    labelPosition: {
      control: { type: "radio" },
      options: ["top", "start", "end", "bottom"],
    },
  },
  parameters: {
    actions: {
      handles: ["switch-change"],
    },
  },
};

const DefaultTemplate = (args: any) => {
  return html`
    <style>
      my-switch {
        --size: ${args["--size"]};
      }
    </style>
    <my-switch
      label="${args.label}"
      ?checked=${args.checked}
      ?disabled=${args.disabled}
      label-position=${args.labelPosition}
    ></my-switch>
  `;
};

export const Default: any = DefaultTemplate.bind({});
Default.args = {
  label: "Test",
  labelPosition: "top",
  "--size": "1rem",
};

const ExternalInteractionTemplate = () => {
  return html`
    <button class="toggle-button">Toggle</button>
    <br />
    <br />
    <my-switch label="Toggle Example"></my-switch>
    <script>
      const button = document.querySelector(".toggle-button");
      const mySwitch = document.querySelector("my-switch");

      button.addEventListener("click", () => mySwitch.toggle());
    </script>
  `;
};

export const ExternalInteraction: any = ExternalInteractionTemplate.bind({});
ExternalInteraction.args = {};

const IconDemoTemplate = () => {
  return html`
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
    />

    <style>
      my-switch {
        --size: 3rem;
      }
    </style>
    <my-switch label="Icon Demo">
      <i class="bi bi-emoji-smile" slot="unchecked"></i>
      <i class="bi bi-emoji-smile-fill" slot="checked"></i>
    </my-switch>
  `;
};

export const IconDemo: any = IconDemoTemplate.bind({});
IconDemo.args = {};

const PartsDemoTemplate = () => {
  return html`
    <style>
      my-switch::part(control) {
        background-color: pink;
        padding: 1rem;
      }

      my-switch::part(track) {
        border-radius: 0;
      }

      my-switch::part(switch) {
        border-radius: 0;
      }
    </style>
    <my-switch label="Parts Demo"> </my-switch>
  `;
};

export const PartsDemo: any = PartsDemoTemplate.bind({});
PartsDemo.args = {};
