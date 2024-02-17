import Image from "next/image"
import CalculatorCard from "../components/common/CalculatorCard"
import Logo from "../public/images/logo.svg"
import Heading from "../components/common/Typography/Heading"
import Paragraph from "../components/common/Typography/Paragraph"
import imageManEating from "../public/images/image-man-eating.webp"
import CardWithBigIcon from "../components/common/CardWithBigIcon"
import CardWithSmallIcon from "../components/common/CardWithSmallIcon"

export default function Home() {
  return (
    <main className="flex max-w-[90rem] flex-col items-center justify-between">
      <div className="flex w-full justify-center lg:justify-start">
        <Image src={Logo} alt="logo" />
      </div>
      <Heading level={1} size="xl" className="">
        Body Mass Index Calculator
      </Heading>
      <Paragraph>
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </Paragraph>
      <CalculatorCard />
      <Image src={imageManEating} alt="man eating" />
      <Heading level={1} size="l" className="">
        What your BMI result means
      </Heading>
      <Paragraph>
        A BMI range of 18.5 to 24.9 is considered a &apos;healthy weight.&apos;
        Maintaining a healthy weight may lower your chances of experiencing
        health issues later on, such as obesity and type 2 diabetes. Aim for a
        nutritious diet with reduced fat and sugar content, incorporating ample
        fruits and vegetables. Additionally, strive for regular physical
        activity, ideally about 30 minutes daily for five days a week.
      </Paragraph>
      <CardWithBigIcon
        title="Healthy eating"
        description="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
        icon="/images/icon-eating.svg"
      />
      <CardWithBigIcon
        title="Regular exercise"
        description="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
        icon="/images/icon-exercise.svg"
      />
      <CardWithBigIcon
        title="Adequate sleep"
        description="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
        icon="/images/icon-sleep.svg"
      />
      <Heading level={1} size="l" className="">
        Limitations of BMI
      </Heading>
      <Paragraph>
        Although BMI is often a practical indicator of healthy weight, it is not
        suited for every person. Specific groups should carefully consider their
        BMI outcomes, and in certain cases, the measurement may not be
        beneficial to use.
      </Paragraph>
      <div className="grid grid-cols-1 gap-4">
        <CardWithSmallIcon
          title="Gender"
          description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
          icon="/images/icon-gender.svg"
        />
        <CardWithSmallIcon
          title="Age"
          description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
          icon="/images/icon-age.svg"
        />
        <CardWithSmallIcon
          title="Muscle"
          description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
          icon="/images/icon-muscle.svg"
        />
        <CardWithSmallIcon
          title="Pregnancy"
          description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
          icon="/images/icon-pregnancy.svg"
        />
        <CardWithSmallIcon
          title="Race"
          description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
          icon="/images/icon-race.svg"
        />
      </div>
    </main>
  )
}
