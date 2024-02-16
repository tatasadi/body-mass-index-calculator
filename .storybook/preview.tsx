import type { Preview } from "@storybook/react"
import { Inter } from "next/font/google"
import "../app/globals.css"
import React from "react"

const inter = Inter({ subsets: ["latin"] })

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "hsla(0, 0%, 14%, 1)" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <main className={inter.className}>
        <Story />
      </main>
    ),
  ],
}

export default preview
