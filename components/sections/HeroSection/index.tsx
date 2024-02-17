import Image from "next/image"
import Logo from "../../../public/images/logo.svg"
import Heading from "../../common/Typography/Heading"
import Paragraph from "../../common/Typography/Paragraph"
import CalculatorCard from "../../common/CalculatorCard"

const HeroSection = () => {
  return (
    <article className="relative w-full px-6 pb-[4.5rem] pt-8 sm:px-10">
      <div className="to-light-blue from-very-light-blue absolute left-0 top-0 z-0 h-[40rem] w-full rounded-b-[2.1875rem] bg-gradient-to-r lg:left-6 lg:h-[46.0625rem] lg:w-[61.125rem]"></div>
      <div className="relative z-10">
        <div className="mb-6 flex w-full justify-center sm:mb-10 lg:ml-[6.25rem] lg:mt-[2.625rem] lg:justify-start">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
          <div className="mb-12 flex flex-col items-center gap-6 text-center sm:mb-10 lg:mb-16 lg:items-start lg:pl-[6.25rem] lg:pt-[5rem] lg:text-left">
            <Heading level={1} size="xl">
              Body Mass <span className="-mt-6 block">Index Calculator</span>
            </Heading>
            <Paragraph className="max-w-[29.0625rem]">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </Paragraph>
          </div>
          <CalculatorCard />
        </div>
      </div>
    </article>
  )
}

export default HeroSection
