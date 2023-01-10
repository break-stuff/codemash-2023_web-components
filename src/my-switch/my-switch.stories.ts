import { html } from "lit";
import "./index";

export default {
  title: "Components/Switch",
  component: "my-switch",
  argTypes: {
    labelPosition: {
      control: { type: "radio" },
      options: ['top', 'start', 'end', 'bottom']
    }
  },
  parameters: {
    actions: {
      handles: ['switch-change'],
    },
  },
};

const DefaultTemplate = (args: any) => {
  return html` <my-switch label="${args.label}" ?checked=${args.checked} ?disabled=${args.disabled} label-position=${args.labelPosition}></my-switch> `;
};

export const Default: any = DefaultTemplate.bind({});
Default.args = {
  label: 'Test',
  labelPosition: 'top'
};
