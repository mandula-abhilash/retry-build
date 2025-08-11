"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Users,
  Code,
  TrendingUp,
  ArrowRight,
  Quote,
} from "lucide-react";
import Link from "next/link";

export default function WhyWeStarted() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/3 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Why We Started
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Short Story Card */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm mb-8 overflow-hidden">
          <CardContent className="p-8 sm:p-10 lg:p-12">
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 text-center">
              <p>
                We love seeing people build - electricians, doctors, students,
                retirees, you name it. Vibe coding, AI, and no-code tools have
                opened the doors for anyone to create.
              </p>

              <div className="bg-red-50 border border-red-100 p-6 rounded-2xl">
                <p className="font-semibold text-gray-900 mb-3">
                  But here's the problem:
                </p>
                <p>
                  Too many great projects never find users. They skip
                  validation, audience research, and real market fit - and end
                  up as abandoned repos.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-6 rounded-2xl border border-primary/20">
                <p className="font-semibold text-primary mb-3">
                  We built this platform to change that.
                </p>
                <p>
                  It starts here: with researched, high-value SaaS ideas you can
                  validate before you write a single line of code.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
            <p className="text-base text-gray-600 mb-4 max-w-2xl mx-auto">
              Ready to build something that matters?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-6 py-3 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Explore Blueprints
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Link href="/story">
                <Button
                  variant="primary"
                  size="lg"
                  className="px-6 py-3 text-base font-semibold border-2 border-gray-200 hover:border-primary/30 hover:bg-white"
                >
                  Read Our Full Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
