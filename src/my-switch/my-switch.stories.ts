import { html } from "lit";
import "./index";

export default {
  title: "Components/Switch",
  component: "my-switch",
  argTypes: {},
  parameters: {
    actions: {
      handles: ['switch-change'],
    },
  },
};

const DefaultTemplate = (args: any) => {
  return html` <my-switch label="${args.label}" ?checked=${args.checked} ?disabled=${args.disabled}></my-switch> `;
};

export const Default: any = DefaultTemplate.bind({});
Default.args = {
  label: 'Test'
};
