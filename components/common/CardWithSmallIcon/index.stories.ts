import type { Meta, StoryObj } from "@storybook/react"
import CardWithSmallIcon from "."

const meta: Meta<typeof CardWithSmallIcon> = {
  title: "Components/CardWithSmallIcon",
  component: CardWithSmallIcon,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Gender",
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    icon: "/images/icon-gender.svg",
  },
}
