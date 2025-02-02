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
          <div className="w-full max-w-[90vw] mx-auto flex gap-[4vw] ml-[5vw]">
            <section className="w-[35%]">
              <h2 className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] font-bold text-[#CC9528] mb-[5vh] text-left">WORK</h2>
              <div className="grid grid-cols-2 gap-[2vw]">
                {workExperience.map((work) => (
                  <motion.div
                    key={work.title}
                    className="relative w-[12vw] h-[12vw] rounded-lg overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={work.image}
                      alt={work.alt}
                      fill
                      className="object-cover transition-all duration-300 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-[0.8vw]">
                      <h3 className="text-[1vw] font-bold mb-[0.4vh]">{work.title}</h3>
                      <p className="text-[0.8vw] mb-[0.8vh] text-center">{work.description}</p>
                      <Link
                        href={work.link}
                        target="_blank"
                        className="bg-[#CC9528] hover:bg-[#CC9528]/80 text-white px-[0.8vw] py-[0.4vh] rounded-full text-[0.7vw]"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <div className="w-[1px] bg-[#CC9528] self-stretch mt-[8vh] mb-[2vh]" />

            <section className="w-[55%]">
              <h2 className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] font-bold text-[#CC9528] mb-[5vh] text-left">PROJECTS</h2>
              <div className="grid grid-cols-2 gap-[2vw]">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className={`relative w-[12vw] h-[12vw] rounded-lg overflow-hidden group ${
                      index % 2 === 1 ? '-ml-[6vw]' : ''
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover transition-all duration-300 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-[0.8vw]">
                      <h3 className="text-[1vw] font-bold mb-[0.4vh]">{project.title}</h3>
                      <p className="text-[0.8vw] mb-[0.8vh] text-center">{project.description}</p>
                      {project.title === 'ScriptLock' ? (
                        <span className="bg-[#CC9528] hover:bg-[#CC9528]/80 text-white px-[0.8vw] py-[0.4vh] rounded-full text-[0.7vw] cursor-default">
                          Working hard on it
                        </span>
                      ) : (
                        <Link
                          href={project.link}
                          target="_blank"
                          className="bg-[#CC9528] hover:bg-[#CC9528]/80 text-white px-[0.8vw] py-[0.4vh] rounded-full text-[0.7vw]"
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
