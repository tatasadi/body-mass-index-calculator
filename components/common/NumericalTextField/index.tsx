import React from "react"
import { Label } from "../Label"
import { Input } from "../Input"

interface Props {
  label: string
  value: string
  onChange: (value: string) => void
  unit: string
}

const NumericalTextField: React.FC<Props> = ({
  label,
  value,
  onChange,
  unit,
}) => {
  return (
    <div>
      <Label className="text-dark-electric-blue text-sm font-normal leading-6">
        {label}
      </Label>
      <div className="relative">
        <Input type="text" value={value} className="pr-16" />
        <span className="text-blue absolute right-5 top-5 text-2xl font-semibold -tracking-[0.075rem]">
          {unit}
        </span>
      </div>
    </div>
  )
}

export default NumericalTextField
