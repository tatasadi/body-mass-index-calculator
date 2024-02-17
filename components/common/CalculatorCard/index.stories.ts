import type { Meta, StoryObj } from "@storybook/react"
import CalculatorCard from "."

const meta: Meta<typeof CalculatorCard> = {
  title: "Components/CalculatorCard",
  component: CalculatorCard,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
