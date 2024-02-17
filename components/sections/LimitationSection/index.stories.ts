import type { Meta, StoryObj } from "@storybook/react"
import LimitationSection from "."

const meta: Meta<typeof LimitationSection> = {
  title: "Sections/LimitationSection",
  component: LimitationSection,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
