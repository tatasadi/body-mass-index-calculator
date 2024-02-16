import type { Meta, StoryObj } from "@storybook/react"
import NumericalTextField from "."

export default {
  title: "Components/NumericalTextField",
  component: NumericalTextField,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof NumericalTextField>

type Story = StoryObj<typeof NumericalTextField>

export const Default: Story = {
  args: {
    label: "Label",
    value: "",
    unit: "cm",
  },
}

export const WithText: Story = {
  args: {
    label: "Label",
    value: "185",
    unit: "cm",
  },
}
