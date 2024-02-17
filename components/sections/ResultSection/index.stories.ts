import type { Meta, StoryObj } from "@storybook/react"
import ResultSection from "."

const meta: Meta<typeof ResultSection> = {
  title: "Sections/ResultSection",
  component: ResultSection,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
