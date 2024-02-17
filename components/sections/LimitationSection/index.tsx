import Heading from "../../common/Typography/Heading"
import Paragraph from "../../common/Typography/Paragraph"
import CardWithSmallIcon from "../../common/CardWithSmallIcon"

const LimitationSection = () => {
  return (
    <article className="relative p-6">
      <div className="left-[8.75rem] top-[3rem] mb-[3.5rem] text-center lg:absolute lg:w-[35.25rem] lg:text-left">
        <Heading level={1} size="l" className="mb-8">
          Limitations of BMI
        </Heading>
        <Paragraph>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </Paragraph>
      </div>
      <div className="mb-36 grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-y-6 lg:grid-cols-12 lg:gap-8">
        <CardWithSmallIcon
          title="Gender"
          description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
          icon="/images/icon-gender.svg"
          className="sm:col-span-2 lg:col-span-3 lg:col-start-8"
        />
        <CardWithSmallIcon
          title="Age"
          description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
          icon="/images/icon-age.svg"
          className="sm:col-span-2 lg:col-span-3 lg:col-start-6"
        />
        <CardWithSmallIcon
          title="Muscle"
          description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
          icon="/images/icon-muscle.svg"
          className="sm:col-span-2 lg:col-span-3 lg:col-start-9"
        />
        <CardWithSmallIcon
          title="Pregnancy"
          description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
          icon="/images/icon-pregnancy.svg"
          className="sm:col-span-2 lg:col-span-3 lg:col-start-4"
        />
        <CardWithSmallIcon
          title="Race"
          description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
          icon="/images/icon-race.svg"
          className="sm:col-span-2 sm:col-start-2 lg:col-span-3 lg:col-start-7"
        />
      </div>
    </article>
  )
}

export default LimitationSection
