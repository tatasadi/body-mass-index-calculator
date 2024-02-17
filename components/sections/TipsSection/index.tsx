import CardWithBigIcon from "../../common/CardWithBigIcon"

const TipsSection = () => {
  return (
    <article className="to-light-blue-25 from-very-light-blue-25 mb-[4.5rem] grid w-full grid-cols-1 gap-10 bg-gradient-to-br px-6 py-[3.5rem] sm:px-10 sm:py-[3.75rem] lg:grid-cols-3 lg:gap-8 lg:rounded-[2.1875rem] lg:px-[7.25rem] lg:pb-[6rem] lg:pt-16">
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
    </article>
  )
}

export default TipsSection
