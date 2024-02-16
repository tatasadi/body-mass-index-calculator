"use client"

import NumericalTextField from "../../common/NumericalTextField"
import { RadioGroup, RadioGroupItem } from "../../common/RadioGroup"
import Heading from "../../common/Typography/Heading"
import Paragraph from "../../common/Typography/Paragraph"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../common/Form"
import { Button } from "../../common/Button"

const formSchema = z.object({
  measurementUnit: z.enum(["metric", "imperial"], {
    required_error: "You need to select a measurement unit.",
  }),
  metricHeight: z.number().min(0, {
    message: "Height must be a positive number.",
  }),
  metricWeight: z.number().min(0, {
    message: "Weight must be a positive number.",
  }),
  imperialHeightFt: z.number().min(0, {
    message: "Height must be a positive number.",
  }),
  imperialHeightIn: z.number().min(0, {
    message: "Height must be a positive number.",
  }),
  imperialWeightSt: z.number().min(0, {
    message: "Weight must be a positive number.",
  }),
  imperialWeightLbs: z.number().min(0, {
    message: "Weight must be a positive number.",
  }),
})

type FormSchema = z.infer<typeof formSchema>

const CalculatorCard = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      measurementUnit: "metric",
    },
  })

  function onSubmit(values: FormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-2xl p-6 shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)] sm:gap-8 lg:max-w-[32.25rem]"
      >
        <Heading level={2} size="m">
          Enter your details below
        </Heading>

        <FormField
          control={form.control}
          name="measurementUnit"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-2 gap-6"
                >
                  <FormItem className="flex items-center gap-2 space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="metric" />
                    </FormControl>
                    <FormLabel className="">Metric</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="imperial" />
                    </FormControl>
                    <FormLabel className="">Imperial</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="metricHeight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height</FormLabel>
                <FormControl>
                  <NumericalTextField unit="cm" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="metricWeight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight</FormLabel>
                <FormControl>
                  <NumericalTextField unit="kg" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 place-items-end gap-6">
          <FormField
            control={form.control}
            name="imperialHeightFt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height</FormLabel>
                <FormControl>
                  <NumericalTextField unit="ft" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imperialHeightIn"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <NumericalTextField unit="in" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imperialWeightSt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight</FormLabel>
                <FormControl>
                  <NumericalTextField unit="st" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imperialWeightLbs"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <NumericalTextField unit="lbs" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="bg-blue flex flex-col gap-6 rounded-2xl p-8 text-white sm:flex-row sm:items-center sm:rounded-r-[12rem]">
          <div>
            <Paragraph size="m-bold" className="text-white">
              Your BMI is...
            </Paragraph>
            <Heading level={3} size="xl">
              23.4
            </Heading>
          </div>
          <Paragraph className="ml-auto max-w-[17rem] text-white">
            Your BMI suggests you’re a healthy weight. Your ideal weight is
            between <span className="font-bold">63.3kgs - 85.2kgs</span>.
          </Paragraph>
        </div>
        <Button type="submit" className="bg-blue text-white">
          Sumbit
        </Button>
      </form>
    </Form>
  )
}

export default CalculatorCard
