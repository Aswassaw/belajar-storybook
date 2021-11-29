import React from "react";
import Center from "../utilities/Center/Center";
import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Default Children",
  },
  decorators: [(story) => <Center>{story()}</Center>],
};

// Menggunakan stories biasa
export const Primary = () => <Button variant='primary'>Primary</Button>;
export const Secondary = () => <Button variant='secondary'>Secondary</Button>;
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
