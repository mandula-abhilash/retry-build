"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Lock,
  Check,
  ArrowRight,
  Zap,
  Users,
  Target,
  Shield,
  Calendar,
  Sparkles,
  BarChart3,
  Library,
  ExternalLink,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(59,130,246,0.12),transparent)]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
                <span className="text-sm font-bold">R</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold tracking-tight">
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    retry.build
                  </span>
                </span>
                <Badge variant="secondary" className="hidden sm:inline-flex">
                  Calm Progress
                </Badge>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <span className="hidden text-sm text-slate-600 sm:inline-flex">
                New today:{" "}
                <span className="ml-1 font-medium">3 blueprints</span>
              </span>
              <Button variant="outline" size="sm" className="hover:shadow-sm">
                Browse Free
              </Button>
              <Button size="sm" className="shadow-sm hover:shadow">
                Unlock Pro
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* subtle gradient wash */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_300px_at_50%_10%,rgba(99,102,241,0.10),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Fresh, research-backed SaaS blueprints
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-[-0.02em] text-slate-900 sm:text-6xl">
              Clarity over chaos.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Ideas you can actually build.
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-600">
              A calm, research-backed vault of SaaS blueprints. No hype, no
              “vibes”—just structured ideas with market notes, tech suggestions,
              and realistic next steps. New blueprints added daily.
            </p>

            <div className="mx-auto mb-6 flex max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="h-12 rounded-xl px-7 text-base shadow-sm hover:shadow"
              >
                Browse Free Ideas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-xl px-7 text-base shadow-sm hover:shadow"
              >
                Unlock Full Access – ₹1,000/month
              </Button>
            </div>

            <p className="text-sm text-slate-500">
              From real product experience. Not promises—starting points.
            </p>

            {/* Stats strip */}
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4 rounded-2xl border bg-white/80 p-4 text-center shadow-sm backdrop-blur">
              {[
                { icon: Library, label: "Blueprints", value: "1,000+" },
                { icon: BarChart3, label: "Complexity levels", value: "3–5" },
                { icon: Sparkles, label: "New / day", value: "3–4" },
              ].map((s, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <s.icon className="mb-1 h-5 w-5 text-blue-600" />
                  <div className="text-base font-semibold text-slate-900">
                    {s.value}
                  </div>
                  <div className="text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Hype Positioning */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Why retry.build Exists
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
              Most people don’t fail for lack of code—they fail for lack of
              clarity. “Vibe coding” feels productive… until weeks pass and
              motivation dips. <strong>retry.build</strong> replaces fuzzy
              starts with <strong>evidence-first blueprints</strong> so you can
              move steadily, reduce false starts, and protect your energy.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Clarity beats hustle", tone: "blue" },
              {
                icon: ArrowRight,
                title: "Progress > vibes",
                tone: "emerald",
              },
              {
                icon: Shield,
                title: "Calm, consistent execution",
                tone: "violet",
              },
            ].map((f, i) => (
              <Card
                key={i}
                className="group border-slate-200 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-${f.tone}-100`}
                  >
                    <f.icon className={`h-7 w-7 text-${f.tone}-600`} />
                  </div>
                  <div className="text-lg font-semibold text-slate-900">
                    {f.title}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              What You Get
            </h2>
            <p className="mt-2 text-slate-600">Free vs Pro comparison</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Free */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">Free (taste)</CardTitle>
                <CardDescription>Explore the vault structure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Title, short description, tags, effort level",
                  "A peek at the blueprint structure (blurred sections)",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 text-emerald-500" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Pro */}
            <Card className="relative border-blue-200 bg-gradient-to-b from-blue-50/60 to-white">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="rounded-full bg-blue-600 px-3 py-1 text-[11px]">
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro (everything)</CardTitle>
                <CardDescription>Complete research blueprints</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Problem & Solution: precise problem framing and why it matters now",
                  "Target Users: who buys, who uses, and their buying triggers",
                  "Tech Stack Suggestions: recommended stack + feasibility notes",
                  "Market & Monetization: scope, pricing models, and expansion paths",
                  "MVP Feature Set & Timelines: what to build first, in what order",
                  "Risks & Differentiators: what to watch and how to stand apart",
                  "Compliance notes (when relevant)",
                  "Growth ideas & early traction playbooks",
                  "Exports to Notion/Trello/Asana to keep you moving",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 text-blue-600" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
                <Separator className="my-4" />
                <p className="text-sm text-slate-600">
                  <strong>P.S.</strong> New blueprints drop daily (3–4/day),
                  across domains and complexity levels.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              How It Works
            </h2>
            <p className="mt-2 text-slate-600">Clarity-First Workflow</p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                n: 1,
                t: "Browse & shortlist",
                s: "by niche, market size, complexity, or stack",
              },
              {
                n: 2,
                t: "Unlock details",
                s: "to see the entire research blueprint",
              },
              {
                n: 3,
                t: "Move forward",
                s: "with a concrete plan (and zero guesswork)",
              },
            ].map((step) => (
              <Card
                key={step.n}
                className="border-slate-200 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    <span className="text-lg font-bold">{step.n}</span>
                  </div>
                  <div className="text-lg font-semibold text-slate-900">
                    {step.t}
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{step.s}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border bg-blue-50 p-6 text-center text-blue-900">
            <p className="italic">
              retry.build is designed to grow with you. Today, you get the best{" "}
              <strong>idea discovery</strong> experience. Members will always be
              first to see what’s next.
            </p>
          </div>
        </div>
      </section>

      {/* Sample Idea */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Sample Idea
            </h2>
            <p className="mt-2 text-slate-600">Locked Preview</p>
          </div>

          <Card className="relative mt-8 overflow-hidden border-slate-200">
            <div className="absolute right-4 top-4">
              <Badge
                variant="secondary"
                className="bg-amber-100 text-amber-900"
              >
                <Lock className="mr-1 h-3.5 w-3.5" />
                Locked
              </Badge>
            </div>

            <CardHeader>
              <CardTitle className="text-2xl">
                Quieter Shifts for Nurses
              </CardTitle>
              <CardDescription className="text-base">
                Software that reduces noise for nursing teams.
              </CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline">healthcare</Badge>
                <Badge variant="outline">nursing</Badge>
                <Badge variant="outline">noise-monitoring</Badge>
                <Badge variant="outline">Effort: 16–20 weeks</Badge>
              </div>
            </CardHeader>

            <CardContent>
              <div className="rounded-xl border-2 border-dashed border-blue-200 bg-gradient-to-r from-blue-50 to-violet-50 p-6">
                <div className="mb-3 flex items-center justify-center gap-2 text-blue-700">
                  <Lock className="h-5 w-5" />
                  <span className="font-semibold">Unlock to see:</span>
                </div>
                <p className="mx-auto max-w-2xl text-center text-slate-700">
                  full problem/solution, market & pricing, MVP scope & timeline,
                  tech stack, compliance notes, risks, growth plays, and an
                  exportable roadmap.
                </p>
                <div className="mt-5 text-center">
                  <Button className="rounded-xl bg-blue-600 px-6 hover:bg-blue-700">
                    See market size, pricing, MVP, and stack →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who It’s For */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Who It’s For
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                icon: Zap,
                tone: "red",
                title: "Builders stuck in the vibe-coding loop",
                sub: "who want a steady plan",
              },
              {
                icon: Target,
                tone: "green",
                title: "Indie hackers",
                sub: "who want clarity before code",
              },
              {
                icon: Users,
                tone: "blue",
                title: "Agencies",
                sub: "turning expertise into products",
              },
              {
                icon: Calendar,
                tone: "purple",
                title: "Investors/strategists",
                sub: "scanning early opportunities",
              },
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-${p.tone}-100`}
                >
                  <p.icon className={`h-6 w-6 text-${p.tone}-600`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="text-slate-600">{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Pricing
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Free */}
            <Card className="border-slate-200 transition hover:-translate-y-0.5 hover:shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <CardDescription>Get started with basic access</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {["Browse the vault", "View limited fields on each idea"].map(
                  (f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 text-emerald-500" />
                      <span className="text-slate-700">{f}</span>
                    </div>
                  )
                )}
                <Button variant="outline" className="mt-6 w-full">
                  Start Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro */}
            <Card className="relative border-blue-200 bg-gradient-to-b from-blue-50/70 to-white transition hover:-translate-y-0.5 hover:shadow-sm">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="rounded-full bg-blue-600 px-3 py-1 text-[11px]">
                  Recommended
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-slate-900">
                    ₹1,000
                  </span>
                  <span className="text-slate-600">/month</span>
                </div>
                <CardDescription>Full access to all blueprints</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Unlock all details on every idea",
                  "Access the full archive",
                  "Early access to new drops",
                  "Save & tag favorites",
                  "Export to your project tools",
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 text-blue-600" />
                    <span className="text-slate-700">{f}</span>
                  </div>
                ))}

                <Button className="mt-6 w-full rounded-xl bg-blue-600 hover:bg-blue-700">
                  Unlock Full Access
                </Button>

                <div className="mt-3 space-y-2 text-center text-sm text-slate-600">
                  <p>
                    ₹1,000/month ≈ ₹33/day—less than a coffee for weeks saved.
                  </p>
                  <p className="text-xs">
                    We don’t promise outcomes. We provide researched starting
                    points so you can execute with confidence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="mx-auto mt-14 max-w-3xl">
            <h3 className="text-center text-xl font-semibold text-slate-900">
              FAQs
            </h3>
            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="a1">
                <AccordionTrigger>
                  How often do you add new ideas?
                </AccordionTrigger>
                <AccordionContent>
                  We add 3–4 new blueprints daily across domains and complexity
                  levels.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="a2">
                <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
                <AccordionContent>
                  Yes. Pro is month-to-month. Cancel from your account in a
                  click.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="a3">
                <AccordionTrigger>Do you include code?</AccordionTrigger>
                <AccordionContent>
                  We focus on decision clarity: problems, scope, stack, risks,
                  and timelines. Code snippets or starters appear when useful.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              Build with clarity. Sustain your momentum.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg opacity-90">
              Join builders swapping vibe coding for calm, consistent progress.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="h-12 rounded-xl px-7 text-base"
              >
                Browse Free Ideas
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl px-7 text-base text-white hover:bg-white hover:text-blue-700"
              >
                Unlock Full Access – ₹1,000/month
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
                <span className="text-sm font-bold">R</span>
              </div>
              <span className="text-xl font-semibold">retry.build</span>
            </div>
            <p className="mx-auto max-w-2xl text-sm text-slate-400">
              A healthier builder environment. Low-noise guidance, realistic
              timelines, structured next steps. Not medical advice—just
              structure to work calmly and consistently.
            </p>
          </div>
          <Separator className="my-8 bg-slate-800" />
          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} retry.build. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
