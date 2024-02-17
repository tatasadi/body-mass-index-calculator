import Paragraph from "../Typography/Paragraph"
import Heading from "../Typography/Heading"
import Image from "next/image"

const CardWithBigIcon = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: string
}) => {
  return (
    <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10 lg:flex-col lg:items-start lg:gap-[2.81rem]">
      <Image src={icon} alt={title} width={64} height={64} />
      <div>
        <Heading level={3} size="m" className="">
          {title}
        </Heading>
        <Paragraph className="mt-6">{description}</Paragraph>
      </div>
    </div>
  )
}

export default CardWithBigIcon
