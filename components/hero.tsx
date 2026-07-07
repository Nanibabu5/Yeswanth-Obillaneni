import Image from 'next/image'
import { MessageCircle, ArrowRight, Download, MapPin } from 'lucide-react'
import { profile, stats } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Available for freelance
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
            {profile.name.split(' ')[0]}{' '}
            <span className="font-serif italic text-primary">{profile.name.split(' ')[1]}</span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            {profile.roles.join('  ·  ')}
          </p>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Hire me
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              View work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {profile.location}
          </p>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/headshot.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <dl className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card/50 p-6 sm:grid-cols-4 sm:p-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
