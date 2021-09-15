import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Heading from "./Heading";

export default {
  title: `Let's Eat!/Heading`,
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Main = Template.bind({});
Main.args = {
  children: "Basic Heading",
};
