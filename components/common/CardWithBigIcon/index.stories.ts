import type { Meta, StoryObj } from "@storybook/react"
import CardWithBigIcon from "."

const meta: Meta<typeof CardWithBigIcon> = {
  title: "Components/CardWithBigIcon",
  component: CardWithBigIcon,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Healthy eating",
    description:
      "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    icon: "/images/icon-eating.svg",
  },
}
