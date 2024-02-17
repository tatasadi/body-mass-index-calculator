import React from "react"
import { Label } from "../Label"
import { Input } from "../Input"

interface Props {
  label?: string
  unit: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const NumericalTextField: React.FC<Props> = ({
  label = "",
  unit,
  ...props
}) => {
  return (
    <div>
      <Label className="text-sm font-normal leading-6 text-dark-electric-blue">
        {label}
      </Label>
      <div className="relative">
        <Input className="pr-16" {...props} />
        <span className="absolute right-5 top-5 text-2xl font-semibold -tracking-[0.075rem] text-blue">
          {unit}
        </span>
      </div>
    </div>
  )
}

export default NumericalTextField
