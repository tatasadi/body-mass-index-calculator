import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "."

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} as Meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: "Button",
  },
}
