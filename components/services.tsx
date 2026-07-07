import { Code2, Megaphone, Users, Check } from 'lucide-react'
import { services } from '@/lib/portfolio-data'

const icons = [Code2, Megaphone, Users]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">What I do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Three ways I help businesses grow
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From the first line of code to the campaign that fills your inbox with leads — I cover
            the full journey.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i]
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
