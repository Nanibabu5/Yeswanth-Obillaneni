import { profile } from '@/lib/portfolio-data'

const skills = [
  'React',
  'Next.js',
  'JavaScript',
  'Tailwind CSS',
  'Meta Ads',
  'SEO',
  'Content Strategy',
  'Team Leadership',
  'Agile Delivery',
  'Client Management',
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium text-primary">About</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Code, campaigns, and delivery — under one roof
          </h2>
        </div>
        <div>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Whether you need a website that loads fast and converts, an ad campaign that fills your
            pipeline, or a steady hand to manage delivery across a large team, I bring the same focus:
            practical work that moves the numbers that matter.
          </p>

          <div className="mt-8">
            <h3 className="text-sm font-medium text-foreground">Skills & tools</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
