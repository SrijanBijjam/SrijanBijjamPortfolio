'use client';

import PageWrapper from '../components/page-wrapper';
import ScrollNav from '../components/scroll';
import Footer from '../components/footer';
import { motion } from 'framer-motion';
import {
  JavaOriginal,
  PythonOriginal,
  COriginal,
  CsharpOriginal,
  CplusplusOriginal,
  Html5Original,
  JavascriptOriginal,
  MysqlOriginal,
  ReactOriginal,
  NodejsOriginal,
  BashOriginal,
  AnsibleOriginal,
  RubyOriginal,
  TrelloOriginal,
  GitOriginal,
  MicrosoftsqlserverOriginal,
  PytorchOriginal,
  LinuxOriginal,
  FigmaOriginal,
} from 'devicons-react';
import { SiDotnet, SiAmazon } from 'react-icons/si';
import { Globe, Languages, Code, Terminal } from 'lucide-react';

export default function Skills() {
  const programmingLanguages = [
    { name: 'Java', icon: <JavaOriginal size={24} /> },
    { name: 'Python', icon: <PythonOriginal size={24} /> },
    { name: 'C', icon: <COriginal size={24} /> },
    { name: 'C#', icon: <CsharpOriginal size={24} /> },
    { name: 'C++', icon: <CplusplusOriginal size={24} /> },
    { name: 'HTML/CSS', icon: <Html5Original size={24} /> },
    { name: 'JavaScript', icon: <JavascriptOriginal size={24} /> },
    { name: 'SQL', icon: <MysqlOriginal size={24} /> },
    { name: 'ReactJS', icon: <ReactOriginal size={24} /> },
    { name: 'NodeJS', icon: <NodejsOriginal size={24} /> },
    { name: 'Bash', icon: <BashOriginal size={24} /> },
    { name: 'Ansible', icon: <AnsibleOriginal size={24} /> },
    { name: 'Ruby', icon: <RubyOriginal size={24} /> },
  ];

  const languages = [
    { name: 'English (Native)', icon: <Globe size={24} /> },
    { name: 'Telugu (Native)', icon: <Languages size={24} /> },
    { name: 'French (Working)', icon: <Globe size={24} /> },
  ];

  const technicalSkills = [
    { name: 'Trello', icon: <TrelloOriginal size={24} /> },
    { name: 'Git', icon: <GitOriginal size={24} /> },
    { name: 'API Programming', icon: <Code size={24} /> },
    { name: 'Microsoft Suite', icon: <MicrosoftsqlserverOriginal size={24} /> },
    { name: '.NET Framework', icon: <SiDotnet size={24} /> },
    { name: 'PyTorch', icon: <PytorchOriginal size={24} /> },
    { name: 'AWS', icon: <SiAmazon size={24} /> },
    { name: 'Linux', icon: <LinuxOriginal size={24} /> },
    { name: 'ServiceNow', icon: <Terminal size={24} /> },
    { name: 'ELK Stack', icon: <Terminal size={24} /> },
    { name: 'Linear', icon: <Terminal size={24} /> },
    { name: 'Figma', icon: <FigmaOriginal size={24} /> },
  ];

  return (
    <>
      <ScrollNav />
      <PageWrapper>
        <main className="flex min-h-screen flex-col items-center justify-between p-[2vw] sm:p-[3vw] md:p-[4vw] lg:p-[5vw]">
          <div className="w-full max-w-[85vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[75vw] mx-auto space-y-[2.5vh] sm:space-y-[3vh] mt-[10vh] sm:mt-[5vh] md:mt-0">
            <section className="space-y-[1vh] sm:space-y-[1.5vh]">
              <h2 className="text-[2.8vw] sm:text-[2.6vw] md:text-[2.5vw] lg:text-[1.5vw] font-bold text-[#CC9528]">Programming Languages</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[1.5vw] sm:gap-[1.2vw] md:gap-[1.2vw] lg:gap-[1vw]">
                {programmingLanguages.map((lang) => (
                  <motion.button
                    key={lang.name}
                    className="flex items-center gap-[1vw] sm:gap-[0.8vw] p-[0.8vw] sm:p-[0.8vw] md:p-[0.8vw] lg:p-[0.5vw] rounded-lg bg-[#171717] hover:bg-[#CC9528] text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-[2.8vw] sm:w-[2.5vw] md:w-[2vw] lg:w-[1.2vw] flex items-center justify-center">
                      {lang.icon}
                    </div>
                    <span className="text-[2vw] sm:text-[1.7vw] md:text-[1.4vw] lg:text-[0.8vw]">{lang.name}</span>
                  </motion.button>
                ))}
              </div>
            </section>

            <section className="space-y-[1vh] sm:space-y-[1.5vh]">
              <h2 className="text-[2.8vw] sm:text-[2.6vw] md:text-[2.5vw] lg:text-[1.5vw] font-bold text-[#CC9528]">Languages</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[1.5vw] sm:gap-[1.2vw] md:gap-[1.2vw] lg:gap-[1vw]">
                {languages.map((lang) => (
                  <motion.button
                    key={lang.name}
                    className="flex items-center gap-[1vw] sm:gap-[0.8vw] p-[0.8vw] sm:p-[0.8vw] md:p-[0.8vw] lg:p-[0.5vw] rounded-lg bg-[#171717] hover:bg-[#CC9528] text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-[2.8vw] sm:w-[2.5vw] md:w-[2vw] lg:w-[1.2vw] flex items-center justify-center">
                      {lang.icon}
                    </div>
                    <span className="text-[2vw] sm:text-[1.7vw] md:text-[1.4vw] lg:text-[0.8vw]">{lang.name}</span>
                  </motion.button>
                ))}
              </div>
            </section>

            <section className="space-y-[1vh] sm:space-y-[1.5vh] pb-[1vh]">
              <h2 className="text-[2.8vw] sm:text-[2.6vw] md:text-[2.5vw] lg:text-[1.5vw] font-bold text-[#CC9528]">Technical Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[1.5vw] sm:gap-[1.2vw] md:gap-[1.2vw] lg:gap-[1vw]">
                {technicalSkills.map((skill) => (
                  <motion.button
                    key={skill.name}
                    className="flex items-center gap-[1vw] sm:gap-[0.8vw] p-[0.8vw] sm:p-[0.8vw] md:p-[0.8vw] lg:p-[0.5vw] rounded-lg bg-[#171717] hover:bg-[#CC9528] text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-[2.8vw] sm:w-[2.5vw] md:w-[2vw] lg:w-[1.2vw] flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className="text-[2vw] sm:text-[1.7vw] md:text-[1.4vw] lg:text-[0.8vw]">{skill.name}</span>
                  </motion.button>
                ))}
              </div>
            </section>
          </div>
          <Footer />
        </main>
      </PageWrapper>
    </>
  );
}
