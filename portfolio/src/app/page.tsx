import Image from 'next/image'
import PageWrapper from './components/page-wrapper'
import ScrollNav from './components/scroll'
import { Kaushan_Script, Averia_Libre } from 'next/font/google'

const kaushanScript = Kaushan_Script({
  weight: '400',
  subsets: ['latin'],
})

const averiaLibre = Averia_Libre({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <ScrollNav />
      <PageWrapper>
        <main className="flex min-h-screen flex-col items-center justify-center p-[3vw] sm:p-[4vw] md:p-[5vw] lg:p-[6vw]">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[80vw] mx-auto gap-[4vw] md:gap-[6vw]">
            <div className="text-left space-y-[3vh] flex-1 relative">
              <Image
                src="/srijanlogoHome.PNG"
                alt="Srijan Bijjam"
                width={440}
                height={110}
                priority
                className="w-[25vw] h-auto absolute top-[-12.5vh] left-[24vw] -z-10"
              />
              <div className="flex items-baseline gap-[2vw] relative z-10 ml-[15vw]">
                <span className={`${kaushanScript.className} text-[4vw] text-white`}>
                  Hi, I&apos;m
                </span>
              </div>
              <p className={`${averiaLibre.className} text-[1.7vw] text-white max-w-[200%] relative z-10 ml-[15.5vw]`}>
                tOSU Grad. Software Engineer. Chill Guy. Let&apos;s connect.
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-center -ml-[10vw]">
              <Image
                src="/srijanbijjam.JPG"
                alt="Srijan&apos;s Photo"
                width={250}
                height={250}
                priority
                className="rounded-3xl w-[20vw] h-auto shadow-[0_0_15px_rgba(204,149,40,0.3)]"
              />
            </div>
          </div>
        </main>
      </PageWrapper>
    </>
  )
}
