'use client'

import PageWrapper from '../components/page-wrapper'
import ScrollNav from '../components/scroll'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CardData {
  image: string
  title: string
  description: string
  link: string
  alt: string
}

export default function Work() {
  const workExperience: CardData[] = [
    {
      image: '/swift.png',
      title: 'SWIFT',
      description: 'Systems & Applications Engineering Intern',
      link: 'https://www.swift.com',
      alt: 'SWIFT company'
    },
    {
      image: '/JDK.png',
      title: 'JDK Technologies',
      description: 'Software Engineer/Content Writer',
      link: 'https://buzzbelow.com/author/srijan/',
      alt: 'JDK Technologies'
    }
  ]

  const projects: CardData[] = [
    {
      image: '/scriptlock.PNG',
      title: 'ScriptLock',
      description: 'Secure file-sharing app targeted towards Film Production',
      link: '',
      alt: 'ScriptLock Project'
    },
    {
      image: '/gymapp.PNG',
      title: 'OSU Gym App',
      description: 'Real-time gym capacity tracking app for OSU gyms',
      link: 'https://github.com/shahvraj26/MyReactNative',
      alt: 'OSU Gym App'
    },
    {
      image: '/emotionrecognition.jpg',
      title: 'Emotion Recognition Model',
      description: 'Deep learning model for facial emotion recognition',
      link: 'https://colab.research.google.com/drive/1c4JUd9eLUHsSx3iriZ2Woj6SwrSy4LdY?usp=sharing',
      alt: 'Emotion Recognition Project'
    },
    {
      image: '/dadjoke.jpg',
      title: 'Dad Joke Generator',
      description: 'Used OpenAI API to generate dad jokes based on user-input topics',
      link: 'https://github.com/abhishekaddagatla/dad_joke_generator',
      alt: 'Dad Joke Generator'
    }
  ]

  return (
    <>
      <ScrollNav />
      <PageWrapper>
        <main className="flex min-h-screen flex-col items-center justify-center p-[3vw] sm:p-[4vw] md:p-[5vw] lg:p-[6vw]">
          <div className="w-full max-w-[85vw] md:max-w-[80vw] mx-auto flex flex-col md:flex-row gap-[3vw] md:gap-[4vw]">
            <section className="w-full md:w-[35%]">
              <h2 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] font-bold text-[#CC9528] mb-[1vh] text-center md:text-left">WORK</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2vw] md:gap-[2vw]">
                {workExperience.map((work) => (
                  <motion.div
                    key={work.title}
                    className="relative w-full h-[15vw] sm:h-[18vw] md:h-[16vw] lg:h-[12vw] rounded-lg overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={work.image}
                      alt={work.alt}
                      fill
                      className="object-cover transition-all duration-300 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-[1.5vw] sm:p-[1.2vw] md:p-[1vw]">
                      <h3 className="text-[2.5vw] sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1vw] font-bold mb-[0.5vh]">{work.title}</h3>
                      <p className="text-[1.8vw] sm:text-[1.3vw] md:text-[1.2vw] lg:text-[0.8vw] mb-[0.8vh] text-center">{work.description}</p>
                      <Link
                        href={work.link}
                        target="_blank"
                        className="bg-[#CC9528] hover:bg-[#CC9528]/80 text-white px-[1.5vw] py-[0.8vh] sm:px-[1.2vw] sm:py-[0.6vh] md:px-[1vw] md:py-[0.5vh] rounded-full text-[1.8vw] sm:text-[1.1vw] md:text-[1vw] lg:text-[0.7vw]"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <div className="w-full md:w-[1px] h-[1px] md:h-auto bg-[#CC9528] self-stretch my-[1vh] md:mt-[8vh] md:mb-[2vh]" />

            <section className="w-full md:w-[55%]">
              <h2 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] font-bold text-[#CC9528] mb-[1vh] text-center md:text-left">PROJECTS</h2>
              <div className="grid grid-cols-2 gap-[2vw] md:gap-[2vw]">
                {projects.map((project) => (
                  <motion.div
                    key={project.title}
                    className={`relative w-full h-[15vw] sm:h-[18vw] md:h-[16vw] lg:h-[12vw] rounded-lg overflow-hidden group`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover transition-all duration-300 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-[1.5vw] sm:p-[1.2vw] md:p-[1vw]">
                      <h3 className="text-[2.5vw] sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1vw] font-bold mb-[0.5vh]">{project.title}</h3>
                      <p className="text-[1.8vw] sm:text-[1.3vw] md:text-[1.2vw] lg:text-[0.8vw] mb-[0.8vh] text-center">{project.description}</p>
                      {project.title === 'ScriptLock' ? (
                        <span className="bg-[#CC9528] hover:bg-[#CC9528]/80 text-white px-[1.5vw] py-[0.8vh] sm:px-[1.2vw] sm:py-[0.6vh] md:px-[1vw] md:py-[0.5vh] rounded-full text-[1.8vw] sm:text-[1.1vw] md:text-[1vw] lg:text-[0.7vw] cursor-default">
                          Working hard on it
                        </span>
                      ) : (
                        <Link
                          href={project.link}
                          target="_blank"
                          className="bg-[#CC9528] hover:bg-[#CC9528]/80 text-white px-[1.5vw] py-[0.8vh] sm:px-[1.2vw] sm:py-[0.6vh] md:px-[1vw] md:py-[0.5vh] rounded-full text-[1.8vw] sm:text-[1.1vw] md:text-[1vw] lg:text-[0.7vw]"
                        >
                          {project.title === 'Emotion Recognition Model' ? 'View Notebook' : 'View on GitHub'}
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </PageWrapper>
    </>
  )
}
