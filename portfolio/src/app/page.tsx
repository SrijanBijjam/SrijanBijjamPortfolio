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
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[80vw] mx-auto gap-[2vw] md:gap-[2vw]">
            <div className="text-center md:text-right flex-1 relative order-2 md:order-1 md:pr-[2vw]">
              <h1 className="relative z-10 max-w-full overflow-hidden mb-[2vh]">
                <div className="flex flex-nowrap items-baseline justify-center md:justify-end">
                  <span 
                    className={`${kaushanScript.className} text-[5vw] sm:text-[4.5vw] md:text-[3.2vw] lg:text-[2.5vw] text-white transition-all duration-500 hover:text-[var(--accent)] hover:scale-105 mr-[0.5vw]`}
                    style={{ textShadow: '0 0 15px rgba(204,149,40,0.3)' }}
                  >
                    Hi, I&apos;m
                  </span>
                  <span 
                    className={`${kaushanScript.className} text-[5.5vw] sm:text-[5vw] md:text-[3.6vw] lg:text-[2.8vw] gold-gradient inline-block`}
                    data-text="Srijan Bijjam"
                  >
                    Srijan Bijjam
                  </span>
                </div>
              </h1>
              
              <p 
                className={`${averiaLibre.className} text-[2.5vw] sm:text-[2vw] md:text-[1.7vw] lg:text-[1.4vw] text-white max-w-full relative z-10 text-center md:text-right`} 
                style={{ textShadow: '0 0 10px rgba(255,255,255,0.2)' }}
              >
                tOSU Grad. Software Engineer. Chill Guy. Let&apos;s connect.
              </p>
            </div>
            <div className="flex-1 flex justify-center order-1 md:order-2 md:pl-[2vw]">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#CC9528] to-[#e9b446] rounded-3xl blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
                <Image
                  src="/srijanbijjam.JPG"
                  alt="Srijan's Photo"
                  width={500}
                  height={500}
                  priority
                  quality={100}
                  className="rounded-3xl w-[30vw] md:w-[20vw] h-auto relative shadow-[0_0_15px_rgba(204,149,40,0.3)] group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </main>
      </PageWrapper>
    </>
  )
}
