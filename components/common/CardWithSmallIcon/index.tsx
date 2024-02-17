import Paragraph from "../Typography/Paragraph"
import Heading from "../Typography/Heading"
import Image from "next/image"

const CardWithSmallIcon = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: string
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)]">
      <div className="flex items-center gap-4">
        <Image src={icon} alt={title} width={32} height={32} />
        <Heading level={3} size="s" className="">
          {title}
        </Heading>
      </div>
      <Paragraph className="mt-6">{description}</Paragraph>
    </div>
  )
}

export default CardWithSmallIcon
