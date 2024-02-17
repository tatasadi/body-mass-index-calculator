import { useState, useEffect, useCallback } from "react"
import { Label } from "../../common/Label"
import NumericalTextField from "../../common/NumericalTextField"
import { RadioGroup, RadioGroupItem } from "../../common/RadioGroup"
import Heading from "../../common/Typography/Heading"
import Paragraph from "../../common/Typography/Paragraph"

const CalculatorCard = () => {
  const [unit, setUnit] = useState("metric")
  // Metric system
  const [heightCm, setHeightCm] = useState("")
  const [weightKg, setWeightKg] = useState("")
  // Imperial system
  const [feet, setFeet] = useState("")
  const [inches, setInches] = useState("")
  const [stones, setStones] = useState("")
  const [pounds, setPounds] = useState("")

  const [bmi, setBmi] = useState<string | null>(null)
  const [bmiCategory, setBmiCategory] = useState("")
  const [idealWeight, setIdealWeight] = useState("")

  const calculateBMI = useCallback(() => {
    let heightInMeters, weightInKg

    if (unit === "metric") {
      heightInMeters = parseFloat(heightCm) / 100
      weightInKg = parseFloat(weightKg)
    } else {
      const totalInches = parseFloat(feet) * 12 + parseFloat(inches)
      const totalPounds = parseFloat(stones) * 14 + parseFloat(pounds)
      heightInMeters = totalInches * 0.0254
      weightInKg = totalPounds * 0.453592
    }

    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / heightInMeters ** 2
      setBmi(bmiValue.toFixed(1))
      categorizeBMI(bmiValue)
      calculateIdealWeight(heightInMeters)
    } else {
      setBmi(null)
      setBmiCategory("")
      setIdealWeight("")
    }
  }, [feet, heightCm, inches, pounds, stones, unit, weightKg])

  const categorizeBMI = (bmiValue: number) => {
    if (bmiValue < 18.5) {
      setBmiCategory("Underweight")
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBmiCategory("Healthy weight")
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setBmiCategory("Overweight")
    } else {
      setBmiCategory("Obesity")
    }
  }

  const calculateIdealWeight = (heightInMeters: number) => {
    // Using the Devine Formula for calculating ideal body weight
    // For men: 50 + 2.3 kg per inch over 5 feet
    // For women or a general approach: 45.5 + 2.3 kg per inch over 5 feet
    // Note: Adjust the base weight and formula as per your target audience or specific requirements
    const idealWeightKg = 45.5 + 2.3 * (heightInMeters * 39.3701 - 60)
    if (idealWeightKg < 0) return setIdealWeight("")
    const idealWeightMin = idealWeightKg * 0.9 // Lower range (-10%)
    const idealWeightMax = idealWeightKg * 1.1 // Upper range (+10%)
    setIdealWeight(
      `${idealWeightMin.toFixed(1)}kg - ${idealWeightMax.toFixed(1)}kg`,
    )
  }

  useEffect(() => {
    calculateBMI()
  }, [unit, heightCm, weightKg, feet, inches, stones, pounds, calculateBMI]) // Recalculate BMI when any input changes

  return (
    <div className="flex flex-col gap-6 rounded-2xl p-6 shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)] sm:gap-8 lg:max-w-[32.25rem]">
      <Heading level={2} size="m">
        Enter your details below
      </Heading>

      <RadioGroup className="grid grid-cols-2 gap-6">
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value="metric"
            id="metric"
            onClick={() => setUnit("metric")}
            checked={unit === "metric"}
          />
          <Label htmlFor="metric">Metric</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value="imperial"
            id="imperial"
            onClick={() => setUnit("imperial")}
            checked={unit === "imperial"}
          />
          <Label htmlFor="imperial">Imperial</Label>
        </div>
      </RadioGroup>

      {unit === "metric" ? (
        <div className="grid gap-6 sm:grid-cols-2">
          <NumericalTextField
            unit="cm"
            label="Height"
            value={heightCm}
            onChange={(e) => setHeightCm(e.target.value)}
          />
          <NumericalTextField
            unit="kg"
            label="Weight"
            value={weightKg}
            onChange={(e) => setWeightKg(e.target.value)}
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 place-items-end gap-6">
          <NumericalTextField
            unit="ft"
            label="Height"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
          />
          <NumericalTextField
            unit="in"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
          />
          <NumericalTextField
            unit="st"
            label="Weight"
            value={stones}
            onChange={(e) => setStones(e.target.value)}
          />
          <NumericalTextField
            unit="lbs"
            value={pounds}
            onChange={(e) => setPounds(e.target.value)}
          />
        </div>
      )}

      <div className="flex flex-col gap-6 rounded-2xl bg-blue p-8 text-white sm:flex-row sm:items-center sm:rounded-r-[12rem]">
        <div>
          <Paragraph size="m-bold" className="text-white">
            Your BMI is...
          </Paragraph>
          <Heading level={3} size="xl">
            {bmi || "N/A"}
          </Heading>
          <Paragraph className="text-white">{bmiCategory}</Paragraph>
        </div>
        <Paragraph className="ml-auto max-w-[17rem] text-white">
          {bmiCategory === "Healthy weight"
            ? "You have a healthy weight. "
            : ""}
          {!bmi || Number(bmi) < 0
            ? "Enter your details to calculate your BMI and ideal weight."
            : idealWeight
              ? `Your ideal weight is between ${idealWeight}.`
              : ""}
        </Paragraph>
      </div>
    </div>
  )
}

export default CalculatorCard
