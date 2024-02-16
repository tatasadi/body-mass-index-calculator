import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "."

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} as Meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: "0",
  },
}

export const WithText: Story = {
  args: {
    value: "185",
  },
}
