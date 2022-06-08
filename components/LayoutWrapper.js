import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="container mx-auto grid max-w-3xl auto-cols-auto grid-flow-col items-center justify-between px-4 py-8 md:grid-cols-3 md:px-0 xl:py-10">
          <div className="flex items-center text-base leading-5">
            <Link
              href="/"
              aria-label={siteMetadata.headerTitle}
              className="hover:text-primary-600 hover:no-underline dark:hover:fill-primary-300 dark:hover:text-primary-700 dark:hover:text-primary-300"
            >
              <div className="flex items-center justify-between bg-transparent">
                <div className="pr-2 font-semibold">Home</div>
              </div>
            </Link>
            <div className="">
              {headerNavLinks.map((link) => {
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="px-2 font-semibold text-gray-900 hover:text-blue-700 hover:no-underline dark:text-gray-100 dark:hover:text-blue-400 sm:px-3"
                  >
                    {link.title}
                  </Link>
                )
              })}
            </div>
            {/* <MobileNav /> */}
          </div>
          <div className="flex hidden justify-center md:flex">
            <Link
              href="/"
              className="px-2 font-semibold text-gray-900 hover:text-blue-700 hover:no-underline dark:text-gray-100 dark:hover:text-blue-400 sm:px-3"
            >
              <Logo className="w-12 fill-current lg:w-16" />
            </Link>
          </div>
          <div className="flex justify-end">
            <ThemeSwitch />
          </div>
        </header>
        <main className="mb-auto px-4 lg:px-6">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
