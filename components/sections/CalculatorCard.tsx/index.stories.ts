import type { Meta, StoryObj } from "@storybook/react"
import CalculatorCard from "."

export default {
  title: "Sections/CalculatorCard",
  component: CalculatorCard,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof CalculatorCard>

type Story = StoryObj<typeof CalculatorCard>

export const Default: Story = {
  args: {},
}
