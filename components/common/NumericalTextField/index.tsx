import React from "react"
import { Label } from "../Label"
import { Input } from "../Input"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  unit: string
}

const NumericalTextField: React.FC<InputProps> = ({ unit, ...props }) => {
  return (
    <div>
      <div className="relative">
        <Input type="text" className="pr-16" {...props} />
        <span className="text-blue absolute right-5 top-5 text-2xl font-semibold -tracking-[0.075rem]">
          {unit}
        </span>
      </div>
    </div>
  )
}

export default NumericalTextField
