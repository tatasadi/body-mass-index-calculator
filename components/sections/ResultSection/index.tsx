import Image from "next/image"
import Heading from "../../common/Typography/Heading"
import Paragraph from "../../common/Typography/Paragraph"
import imageManEating from "../../../public/images/image-man-eating.webp"

const ResultSection = () => {
  return (
    <article className="mx-auto mb-32 w-full max-w-[72.5rem] sm:mb-40 sm:grid sm:grid-cols-2 sm:place-items-start lg:mb-[8.5rem] lg:mt-16 lg:place-items-center lg:pl-20">
      <Image
        src={imageManEating}
        alt="man eating"
        className="sm:-translate-x-16"
      />
      <div className="mt-12 flex flex-col gap-8 px-6 sm:pr-10 lg:gap-[2.5rem] lg:pl-20 lg:pr-0 lg:pt-[8rem]">
        <Heading level={1} size="l" className="">
          What your BMI result means
        </Heading>
        <Paragraph>
          A BMI range of 18.5 to 24.9 is considered a &apos;healthy
          weight.&apos; Maintaining a healthy weight may lower your chances of
          experiencing health issues later on, such as obesity and type 2
          diabetes. Aim for a nutritious diet with reduced fat and sugar
          content, incorporating ample fruits and vegetables. Additionally,
          strive for regular physical activity, ideally about 30 minutes daily
          for five days a week.
        </Paragraph>
      </div>
    </article>
  )
}

export default ResultSection
