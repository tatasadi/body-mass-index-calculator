import type { Meta, StoryObj } from "@storybook/react"
import TipsSection from "."

const meta: Meta<typeof TipsSection> = {
  title: "Sections/TipsSection",
  component: TipsSection,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
