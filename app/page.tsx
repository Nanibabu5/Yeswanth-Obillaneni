import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
