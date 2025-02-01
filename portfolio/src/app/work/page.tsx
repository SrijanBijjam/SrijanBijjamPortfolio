import PageWrapper from '../components/page-wrapper'
import ScrollNav from '../components/scroll'

export default function Work() {
  return (
    <>
      <ScrollNav />
      <PageWrapper>
        <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24">
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              My Work
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Projects and Experience
            </p>
          </div>
        </main>
      </PageWrapper>
    </>
  )
}
