"use client";

import Link from "next/link";
import Header from "@/components/landing-page/Header";
import Footer from "@/components/landing-page/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Heart,
  Users,
  Code,
  TrendingUp,
  Lightbulb,
  Target,
  Zap,
} from "lucide-react";

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
                Our Story
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Why we built <span className="font-bold">retry.build</span> and
              what we're working toward
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardContent className="p-12 lg:p-16">
              <div className="prose prose-lg max-w-none">
                <div className="space-y-8 text-lg leading-relaxed text-gray-700">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      The Spark
                    </h2>
                    <p className="text-xl font-medium text-primary mb-6">
                      We've been watching something amazing happen.
                    </p>
                    <p>
                      Ideas are popping up from everywhere - not just from the
                      usual startup circles, but from the most unexpected
                      places: Electricians. Statisticians. Doctors. Retirees.
                      Students. Teachers. Even people who've never written a
                      line of code before.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl border-l-4 border-primary/30">
                    <p className="mb-4">
                      It's a healthy, buzzing environment - people learning,
                      experimenting, creating. It's generating income, creating
                      jobs, boosting productivity, and lifting economies.
                    </p>
                    <p className="font-semibold text-primary text-xl">
                      We love tech. Period.
                    </p>
                  </div>

                  <p>
                    Vibe coding. AI. LLMs. No-code tools. All of these have made
                    it easier than ever for someone to wake up with an idea and
                    start building it.
                  </p>
                  <p className="font-bold text-primary">
                    And honestly? That makes us happy.
                  </p>

                  <div className="border-t border-gray-200 pt-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      The Problem We Couldn't Ignore
                    </h2>
                    <p className="text-xl font-semibold text-gray-900 mb-6">
                      But here's the part that gets to us:
                    </p>

                    <div className="bg-red-50 border border-red-100 p-8 rounded-2xl mb-6">
                      <p className="mb-4">
                        We've also seen far too many projects get built… and
                        then vanish. Not because they weren't good ideas, but
                        because the builder never validated them.
                      </p>
                      <p className="mb-4">
                        They didn't know how to find an audience, how to do the
                        right research before diving into code, or how to
                        position their work so someone would actually use it.
                      </p>
                      <div className="text-center py-4">
                        <p className="text-red-700 font-bold text-xl">
                          Great energy. Great effort. No traction.
                        </p>
                      </div>
                      <p className="text-gray-700 italic">
                        That hurts to watch.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-8">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                      Our Solution
                    </h2>
                    <p className="text-xl font-semibold text-primary mb-6">
                      So we decided to do something about it.
                    </p>

                    <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 rounded-2xl border border-primary/20 mb-8">
                      <p className="mb-6 text-lg">
                        This platform exists to give makers - vibe coders, indie
                        hackers, solopreneurs - a head start. It starts with
                        ideas. Real, researched, high-value SaaS concepts you
                        can actually act on.
                      </p>

                      <div className="grid sm:grid-cols-3 gap-6 mb-8">
                        <div className="text-center p-4 bg-white/50 rounded-xl">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <Lightbulb className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="font-semibold mb-2">
                            Validated Ideas
                          </h4>
                          <p className="text-sm text-gray-600">
                            Research-backed concepts you can trust
                          </p>
                        </div>
                        <div className="text-center p-4 bg-white/50 rounded-xl">
                          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <Target className="w-6 h-6 text-secondary" />
                          </div>
                          <h4 className="font-semibold mb-2">
                            Market Research
                          </h4>
                          <p className="text-sm text-gray-600">
                            Know your audience before you build
                          </p>
                        </div>
                        <div className="text-center p-4 bg-white/50 rounded-xl">
                          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <Zap className="w-6 h-6 text-accent" />
                          </div>
                          <h4 className="font-semibold mb-2">Clear Roadmaps</h4>
                          <p className="text-sm text-gray-600">
                            Step-by-step execution plans
                          </p>
                        </div>
                      </div>

                      <p className="text-lg">
                        Ideas you can validate, test, and grow before you sink
                        months of work into building.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      What's Next
                    </h2>
                    <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100">
                      <p className="mb-4 text-lg">
                        This is just the trailer. We have bigger plans to help
                        you go from spark to something people use and love.
                      </p>
                      <p className="font-medium text-primary text-xl">
                        But for now, we're starting where every good build
                        starts - at the idea stage.
                      </p>
                    </div>
                  </div>

                  <div className="text-center pt-8 border-t border-gray-200">
                    <p className="text-xl text-gray-600 mb-8">
                      Ready to build something that matters?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/">
                        <Button
                          size="lg"
                          className="px-8 py-4 text-lg font-semibold"
                        >
                          Explore Blueprints
                        </Button>
                      </Link>
                      <Link href="/sample">
                        <Button
                          variant="outline"
                          size="lg"
                          className="px-8 py-4 text-lg font-semibold"
                        >
                          View Sample Blueprint
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
