import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "."

export default {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Label>

type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: "Label",
  },
}
