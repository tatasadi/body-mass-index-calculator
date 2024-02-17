import type { Meta, StoryObj } from "@storybook/react"
import NumericalTextField from "."

const meta: Meta<typeof NumericalTextField> = {
  title: "Components/NumericalTextField",
  component: NumericalTextField,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof meta>

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
