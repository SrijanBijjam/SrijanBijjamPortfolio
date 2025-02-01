import PageWrapper from '../components/page-wrapper'
import ScrollNav from '../components/scroll'

export default function Skills() {
  return (
    <>
      <ScrollNav />
      <PageWrapper>
        <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24">
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Skills
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Technologies and Tools
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
              {/* Add your skill icons/cards here */}
              {/* Example structure: */}
              <div className="p-4 rounded-lg bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-colors">
                {/* Skill 1 */}
              </div>
              {/* Repeat for other skills */}
            </div>
          </div>
        </main>
      </PageWrapper>
    </>
  )
}
