import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'

export function Projects() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">Selected work</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Projects that shipped and delivered
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">Websites, tools & campaigns</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const isExternal = project.link.startsWith('http')
            return (
              <a
                key={project.title}
                href={project.link}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50 ${
                  i === 0 ? 'md:col-span-2 md:flex-row' : ''
                }`}
              >
                <div
                  className={`relative aspect-video overflow-hidden ${
                    i === 0 ? 'md:aspect-auto md:w-1/2' : ''
                  }`}
                >
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.title} — ${project.category}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-primary">
                        {project.category}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
