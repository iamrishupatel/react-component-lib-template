import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "../components/Button/Button";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      defaultValue: "Button",
    },
  },
};
export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary",
};

export const Dashed = Template.bind({});
Dashed.args = {
  variant: "dashed",
  children: "Dashed",
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: "Rounded",
  shape: "rounded",
};

export const Circle = Template.bind({});
Circle.args = {
  children: "C",
  shape: "circle",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large",
  size: "lg",
};

export const Small = Template.bind({});
Small.args = {
  children: "Small",
  size: "sm",
};
