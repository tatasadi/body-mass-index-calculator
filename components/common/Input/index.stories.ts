import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "."

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
}

export default meta

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
