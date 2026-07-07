import { MessageCircle, Mail, Download, ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">Get in touch</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
              Have a project in mind? Let&apos;s make it happen.
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              I reply fastest on WhatsApp. Tell me about your website, campaign, or team — and
              I&apos;ll get back to you with a clear plan.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Message on WhatsApp
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              Download resume
            </a>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center justify-between gap-4 bg-card p-5 transition-colors hover:bg-background"
            >
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="mt-1 text-sm font-medium">{profile.email}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 bg-card p-5 transition-colors hover:bg-background"
            >
              <div>
                <p className="text-xs text-muted-foreground">WhatsApp</p>
                <p className="mt-1 text-sm font-medium">+91 95506 90091</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
