import LimitationSection from "../components/sections/LimitationSection"
import HeroSection from "../components/sections/HeroSection"
import ResultSection from "../components/sections/ResultSection"
import TipsSection from "../components/sections/TipsSection"

export default function Home() {
  return (
    <main className="relative flex max-w-[90rem] flex-col items-center justify-between">
      <div className="absolute right-[10.4rem] top-[46.8rem] z-0 h-[12.5rem] w-[5.3125rem] bg-contain bg-no-repeat lg:bg-[url('../public/images/pattern-curved-line-left.svg')]"></div>
      <div className="absolute bottom-[20.7rem] left-[10.3rem] z-0 h-[7.625rem] w-[5.875rem] bg-contain bg-no-repeat lg:bg-[url('../public/images/pattern-curved-line-right.svg')]"></div>
      <HeroSection />
      <ResultSection />
      <TipsSection />
      <LimitationSection />
    </main>
  )
}
