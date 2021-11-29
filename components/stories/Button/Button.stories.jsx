import React from "react";
import Center from "../utilities/Center/Center";
import Button from "./Button";
import { action, actions } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Default Children",
  },
  decorators: [(story) => <Center>{story()}</Center>],
};

// Menggunakan stories biasa
export const Primary = () => (
  <Button onClick={action("Click Handler")} variant='primary'>
    Primary
  </Button>
);
export const Secondary = () => (
  <Button {...actions("onClick", "onMouseOver")} variant='secondary'>
    Secondary
  </Button>
);
export const Success = () => <Button variant='success'>Success</Button>;
export const Danger = () => <Button variant='danger'>Danger</Button>;

// Menggunakan stories template dan args
const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};
PrimaryA.storyName = "Primary Args";

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: "Long Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  // children: "Secondary Args",
};

export const Log = () => (
  <Button onClick={() => console.log("Button Clicked")}>Console Log</Button>
);

export const Knobs = () => (
  <Button disabled={boolean("Disabled", false)}>
    {text("Label", "Button Label")}
  </Button>
);

export const Env = () => (
  <Button onClick={() => console.log(`${process.env.STORYBOOK_THEME}`)}>
    ENV
  </Button>
);
