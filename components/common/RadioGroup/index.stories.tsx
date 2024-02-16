import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { RadioGroup, RadioGroupItem } from "." // Update the import path accordingly
import { Label } from "../Label"

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
} as Meta

const Template: StoryFn<React.ComponentPropsWithoutRef<typeof RadioGroup>> = (
  args,
) => (
  <RadioGroup {...args}>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-one" id="option-one" />
      <Label htmlFor="option-one">Option One</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-two" id="option-two" />
      <Label htmlFor="option-two">Option Two</Label>
    </div>
  </RadioGroup>
)

export const Default = Template.bind({})
